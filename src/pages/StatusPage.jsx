import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import StatusPageCard from "../components/StatusPageCard";
import { LoginContext } from "../context/loginContext";

export function StatusPage() {
  const { login } = useContext(LoginContext);
  const { finishedOrder, cartChannel, channel } = useContext(OrderContext);
  const [cart, setCart] = useState(finishedOrder);

  cartChannel.postMessage(finishedOrder);

  cartChannel.onmessage = (e) => {
    setCart(e.data);
    console.log(e.data);
    localStorage.setItem("channelCart", JSON.stringify(e.data));
  };

  return (
    <>
      {login ? (
        <>
          {" "}
          <h1 className="text-xl font-bold flex justify-center my-2">
            STATUS PORUDŽBINA
          </h1>
          <div className="md:flex md:justify-center md:items-center">
            <ul className="sm:w-full lg:max-w-full  grid grid-cols-1 md:grid-cols-2">
              {finishedOrder?.map((orderList) => (
                <StatusPageCard
                  key={orderList.id}
                  orderList={orderList}
                  // status={orderList.status}
                  // totalPrice={orderList.totalPrice}
                  // id={orderList.id}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div>
          <h1>Morate biti ulogovani</h1>
        </div>
      )}
    </>
  );
}
