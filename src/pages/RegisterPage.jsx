import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-red-500">Register Page</h1>
      <div>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
      </div>
    </div>
  );
}
