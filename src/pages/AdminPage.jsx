import { Link } from "react-router-dom";

export function AdminPage() {
  return (
    <div>
      <h1>Admin Page</h1>
      <div>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </div>
    </div>
  );
}
