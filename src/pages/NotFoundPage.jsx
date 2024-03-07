import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    <div>
      404 Not Found
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}
