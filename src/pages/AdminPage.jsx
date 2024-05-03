import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import AdminStatusCard from "../components/AdminStatusCard";
import { LoginContext } from "../context/loginContext";

export function AdminPage() {
  const { finishedOrder } = useContext(OrderContext);
  const { isAdmin } = useContext(LoginContext);

  return (
    <div>
      {isAdmin ? (
        <>
          <h1 className="text-xl font-bold flex justify-center my-2">
            STATUS PORUDŽBINA
          </h1>
          <div className="md:flex md:justify-center md:items-center">
            <ul className="sm:w-full lg:max-w-full  grid grid-cols-1 md:grid-cols-2">
              {finishedOrder.map((orderList) => (
                <AdminStatusCard key={orderList.id} orderList={orderList} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <h1>Stranica dostupna samo za zaposlene</h1>
      )}
    </div>
  );
}
