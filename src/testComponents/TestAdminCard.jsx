import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";

const TestAdminCard = ({ orderList, status, id, totalPrice }) => {
  const localStorageDataCart = JSON.parse(localStorage.getItem(`channelCart`));

  const { channel } = useContext(OrderContext);

  const orderStatusObj = {
    inTheMaking: "Priprema se",
    done: "Spremno",
  };

  channel.onmessage = (e) => {
    // setStatus(e.data);
    status = e.data;
    console.log(e.data);
    console.log(status);
    handleStatus();
  };

  function handleStatus() {
    if (status === "Priprema se") {
      status = orderStatusObj.done;
      channel.postMessage(orderStatusObj.done);
    } else if (status === "Primljena porudžbina") {
      status = orderStatusObj.inTheMaking;
      channel.postMessage(orderStatusObj.inTheMaking);
    }
  }

  return (
    <li
      className={
        "flex justify-center items-center border-black border m-2 bg-gray-50 hover:bg-gray-200 transform hover:scale-95 transition duration-200 rounded-md h-[400px]"
      }
    >
      <h1 className="text-lg font-semibold left-2 top-2 absolute font-montserrat">
        Order ID: {id}
      </h1>
      <button
        onClick={handleStatus}
        className="font-semibold right-2 top-2 absolute font-montserrat text-sm md:text-md text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md py-2 px-4"
      >
        {status}
      </button>
      <div className="flex flex-col">
        {orderList?.map((coffee) => (
          <li key={coffee.id}>
            <h1 className="text-xl font-montserrat">
              {coffee.name} <span>({coffee.amound} kom)</span>
            </h1>
            <p>
              {coffee.size}/{coffee.bean}
              {coffee.milk ? `/${coffee.milk}` : ""}
            </p>
          </li>
        ))}
      </div>
      <h1 className="absolute right-2 bottom-2 text-2xl font-bold text-[#164864] font-montserrat">
        Total Price: {totalPrice},00 RSD
      </h1>
    </li>
  );
};

export default TestAdminCard;
