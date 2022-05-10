const site_url = encodeURIComponent("http://localhost:3000")
const redirect_uri =  encodeURIComponent("http://localhost:3000/callback")
const client_id = "sigma_dev"
const client_secret = "GMbYj1-0bjX1M7MTkBYLd-h6-sE"


/**
 * redirects users to SBHS API to start OAuth2 process
 */
export function request_code() {

    const state = 'abc'
    localStorage.setItem('state', state)

    
    console.log('redirecting to SBHS API')
    window.location.href = (
        "https://student.sbhs.net.au/api/authorize?" +
        "response_type=code" +
        "&scope=all-ro" +
        "&state=" + state +
        "&client_id=" + client_id +
        "&client_secret=" + client_secret + 
        "&redirect_uri=" + redirect_uri
    )


}

/**
 * Requests tokens from SBHS API using code following callback
 * @returns True if tokens were aquired successfully
 */
export async function request_tokens() {

  // extracts code from url
  const query_string = window.location.search
  const url_params = new URLSearchParams(query_string)
  const code = url_params.get("code")
  console.log(code)

  // denied access
  if (code === null) {
    return false
  }

  window.history.replaceState({}, "", "/")

  // creats url request and body
  const request_url = "https://student.sbhs.net.au/api/token"
  const request_body = (
      "grant_type=authorization_code" +
      "&redirect_uri=" + redirect_uri +
      "&client_id=" + client_id +
      "&client_secret=" + client_secret + 
      "&code=" + code
  )
  
  
  // request tokens
  console.log("exchanging code for tokens")

  let response = await fetch(request_url, {
    method: "POST",
    headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
    body: request_body}
    ).catch(err => console.log(err))

  if (!response.ok) {

      console.log("Error fetching tokens. -1")

      response = await fetch(request_url, {
          method: "POST",
          headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
          body: request_body}
          ).catch(e => console.log(e))

      if (!response.ok) {

          console.log('Error fetching tokens. -2')
          return false

      }
  }

  // process tokens

  let tokens = await response.json()
  
  if (tokens) {

      localStorage.setItem('access_token', tokens['access_token'])
      localStorage.setItem('access_token_expiry', new Date(Date.now() + 60*60*1000))
      localStorage.setItem('refresh_token', tokens['refresh_token'])
      localStorage.setItem('refresh_token_expiry', new Date(Date.now() + 90*24*60*60*1000))

      window.location.assign('/')
      localStorage.removeItem('state')
      return true
  } 

}


/**
 * Attempts to retrieve access token if users are logged in
 * @returns Name of page to be displayed
 */
export async function get_tokens() {

  // refresh token does not exist (i.e. not logged on)
  if (localStorage.getItem("refresh_token") == null) {

      // defaults to login page
      return 'Login'

  } 
  
  // if refresh token exists, check its expiry
  else if (new Date(localStorage.getItem('refresh_token_expiry')) < new Date) {

    // refresh token is expired
    localStorage.clear()
    return 'Login'

  }

  // refresh token is valid
  else {

    // checking access token
    if (new Date(localStorage.getItem('access_token_expiry')) < new Date()) {
      
      // access token is expired, getting new access token
      const refresh_token = localStorage.getItem('refresh_token')
      const request_url = "https://student.sbhs.net.au/api/token"
      const request_body = (
        "grant_type=refresh_token" +
        "&client_id=" + client_id +
        "&refresh_token=" + refresh_token 
        // "&code_verifier=" + verifier
      )

      let response = await fetch(request_url, {
        method: "POST",
        headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body: request_body
      }).catch(err => {
          console.log(err)
      })

      var access_token = await response.json().access_token
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('access_token_expiry', new Date(Date.now() + 60*60*1000))

      get_data()

      return 'Home'

    }

    // access token valid
    else {

      get_data()
      
      return 'Home'

    }

  }

}

/**
 * Fetchs data from SBHS API using stored tokens
 */
export function get_data() {

}