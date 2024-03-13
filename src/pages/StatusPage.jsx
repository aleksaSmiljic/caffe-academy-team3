import { Link } from "react-router-dom";
import Header from "../components/Header";

export function StatusPage() {
  return (
    <div>
      <Header />
      <h1 className="text-xl font-bold">Status Page</h1>
      <div>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </div>
    </div>
  );
}
