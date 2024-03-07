import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
