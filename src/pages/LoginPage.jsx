import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <h2>
          <Link to="/register">Register</Link>
        </h2>
      </div>
    </div>
  );
}
