import { Link } from "react-router-dom";
import Header from "../components/Header";

export function LoginPage() {
  return (
    <div>
      <Header />
      <h1 className="text-xl font-bold">Login Page</h1>
      <div>
        <h2>
          <Link to="/register">Register</Link>
        </h2>
      </div>
    </div>
  );
}
