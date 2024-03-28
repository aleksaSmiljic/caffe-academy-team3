import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { lighten } from "@mantine/core";
import StatusPageCard from "../components/StatusPageCard";

export function StatusPage() {
  const { finishedOrder, cart } = useContext(OrderContext);

  return (
    <div>
      <h1 className="text-xl font-bold">Status Page</h1>
      <button
        className="border"
        onClick={() => {
          console.log(finishedOrder);
          console.log(cart);
        }}
      >
        Klikni me
      </button>
      <ul>
        {finishedOrder.map((orderList) => (
          <li key={orderList.id}>
            <h1 className="text-2xl">{orderList.id}</h1>
            {orderList.order.map((coffee) => (
              <li key={coffee.id}>
                <h1 className="text-xl">{coffee.name}</h1>
              </li>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
