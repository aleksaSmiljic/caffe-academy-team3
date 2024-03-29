import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import StatusPageCard from "../components/StatusPageCard";

export function StatusPage() {
  const { finishedOrder } = useContext(OrderContext);

  return (
    <div className="md:flex md:justify-center md:items-center">
      <ul className="sm:w-full lg:max-w-full  grid grid-cols-1 md:grid-cols-2">
        {finishedOrder.map((orderList) => (
          <StatusPageCard key={orderList.id} orderList={orderList} />
        ))}
      </ul>
    </div>
  );
}
