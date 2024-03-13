import { Link } from "react-router-dom";
import Header from "../components/Header";

export function RegisterPage() {
  return (
    <div>
      <Header />
      <h1 className="text-xl font-bold ">Register Page</h1>
      <div>
        <h2>
          <Link to="/login">Login</Link>
        </h2>
      </div>
    </div>
  );
}
