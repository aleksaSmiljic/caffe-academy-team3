import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";

const TestStatusCard = ({ orderList, status, id, totalPrice }) => {
  const localStorageDataOrder = JSON.parse(localStorage.getItem(`channelCart`));
  //   const [status, setStatus] = useState("Primljena porudžbina");

  const { channel, cartChannel } = useContext(OrderContext);

  const [orderStatus, setOrderStatus] = useState(status);

  channel.onmessage = (e) => {
    localStorageDataOrder[id - 1].status = e.data;
    console.log(localStorageDataOrder[id - 1].status);
    localStorage.setItem(`channelCart`, JSON.stringify(localStorageDataOrder));
    status = e.data;
    setOrderStatus(e.data);
    console.log(e.data);
    console.log(status);
  };

  return (
    <li
      className={
        "flex justify-center items-center border-black border m-2 bg-gray-50 hover:bg-gray-200 transform hover:scale-95 transition duration-200 rounded-md h-[400px]"
      }
    >
      <h1 className="text-lg font-semibold left-2 top-2 absolute font-montserrat">
        Order ID: {id}
      </h1>
      <p className="font-semibold right-2 top-2 absolute font-montserrat text-sm md:text-md text-white bg-[#248CC5] rounded-md py-2 px-4">
        {orderStatus}
      </p>
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

export default TestStatusCard;
