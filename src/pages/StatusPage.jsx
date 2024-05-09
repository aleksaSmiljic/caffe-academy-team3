import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import StatusPageCard from "../components/StatusPageCard";
import { LoginContext } from "../context/loginContext";
import { Link } from "react-router-dom";

export function StatusPage() {
  const { login } = useContext(LoginContext);
  const { finishedOrder, cartChannel, channel, setFinishedOrder } =
    useContext(OrderContext);
  const [cart, setCart] = useState(finishedOrder);

  // cartChannel.postMessage(finishedOrder);

  cartChannel.onmessage = (e) => {
    setCart(e.data);
    console.log(e.data);
    localStorage.setItem("channelCart", JSON.stringify(e.data));
  };

  channel.onmessage = (e) => {
    // if (e.data.orderId === orderList.id) {
    //   setStatus(e.data.status);
    //   console.log(e.data);
    // }
    // const a = finishedOrder.map((order) => {
    //   if (e.data.orderId === order.id) {
    //     return { ...order, status: e.data.status };
    //   }
    //   return order;
    // });
    // console.log("konzol log", a);
    setFinishedOrder((old) =>
      old.map((order) => {
        if (e.data.orderId === order.id) {
          return { ...order, status: e.data.status };
        }
        return order;
      })
    );
    // cartChannel.postMessage(
    //   finishedOrder.map((order) => {
    //     if (e.data.orderId === order.id) {
    //       return { ...order, status: e.data.status };
    //     }
    //     return order;
    //   })
    // );
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
                <StatusPageCard key={orderList.id} orderList={orderList} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-3xl font-montserrat text-center">
              Morate biti ulogovani!
            </h2>
            <button className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
              <Link to="/login">Login Page</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
