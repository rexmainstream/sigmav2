import { request_code } from "../Auth/auth.tsx";

/**
 * Login page with 
 * @returns Login page react component
 */
function Login() {

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;

    return (
        <button onClick={() => { request_code(client_id, client_secret) }}>
            Login
        </button>
    );
}

export default Login;