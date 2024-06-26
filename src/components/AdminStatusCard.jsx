import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const AdminStatusCard = ({ orderList }) => {
  const { changeStatus } = useContext(OrderContext);

  const id = orderList.id.slice(0, 7);

  function handleStatusChange() {
    changeStatus(orderList.id);
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
        onClick={() => {
          handleStatusChange();
        }}
        className="font-semibold right-2 top-2 absolute font-montserrat text-sm md:text-md text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md py-2 px-4"
      >
        {orderList.status}
      </button>
      <div className="flex flex-col">
        {orderList?.order?.map((coffee) => (
          <li key={coffee.id}>
            <h1 className="text-xl font-montserrat">
              {coffee.name} <span>({coffee.amound} kom)</span>
            </h1>
            <p>
              {coffee.size}/{coffee.bean}
              {coffee.milk ? `/${coffee.typeOfMilk}` : ""}
            </p>
          </li>
        ))}
      </div>
      <h1 className="absolute right-2 bottom-2 text-2xl font-bold text-[#164864] font-montserrat">
        Total Price: {orderList.totalPrice},00 RSD
      </h1>
    </li>
  );
};

export default AdminStatusCard;
