import { request_code } from '../auth'


function Login() {
    return (
        <div>
            <button onClick={ () => request_code() }>
                Login
            </button>
        </div>
    );
}

export default Login;