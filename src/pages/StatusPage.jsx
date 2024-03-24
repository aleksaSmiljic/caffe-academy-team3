import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export function StatusPage() {
  const { cart } = useContext(OrderContext);

  return (
    <div>
      <h1 className="text-xl font-bold">Status Page</h1>
      <ul>
        {cart.map((coffee) => (
          <li key={coffee.id}>
            <h1>{coffee.name}</h1>
            <p>{coffee.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
