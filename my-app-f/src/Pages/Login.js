import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <h1>This is Login Page</h1>
      <Link to="/signup">Sing-up</Link>
    </>
  );
}

export default Login;