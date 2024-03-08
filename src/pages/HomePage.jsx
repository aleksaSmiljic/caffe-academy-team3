import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-red-500">Home Page</h1>
      <div>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
        <h2>
          <Link to="/register">Register</Link>
        </h2>
        <h2>
          <Link to="/status">Status</Link>
        </h2>
        <h2>
          <Link to="/admin">Admin</Link>
        </h2>
      </div>
    </div>
  );
}
