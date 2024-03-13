import { Link } from "react-router-dom";
import Header from "../components/Header";

export function AdminPage() {
  return (
    <div>
      <Header />
      <h1 className="text-xl font-bold ">Admin Page</h1>
      <div>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </div>
    </div>
  );
}
