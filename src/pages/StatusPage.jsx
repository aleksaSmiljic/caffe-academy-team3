import { Link } from "react-router-dom";

export function StatusPage() {
  return (
    <div>
      <h1 className="text-xl font-bold text-red-500">Status Page</h1>
      <div>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </div>
    </div>
  );
}
