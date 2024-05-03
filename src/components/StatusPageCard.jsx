const StatusPageCard = ({ orderList }) => {
  const localStorageDataOrder = JSON.parse(
    localStorage.getItem(`order${orderList.id}`)
  );

  return (
    <li
      className={
        "flex justify-center items-center border-black border m-2 bg-gray-50 hover:bg-gray-200 transform hover:scale-95 transition duration-200 rounded-md h-[400px]"
      }
    >
      <h1 className="text-lg font-semibold left-2 top-2 absolute font-montserrat">
        Order ID: {orderList.id}
      </h1>
      <div className="flex flex-col">
        {orderList?.order?.map((coffee) => (
          <li key={coffee.id}>
            <h1 className="text-xl font-montserrat">
              {coffee.name} <span>({coffee.amound} kom)</span>
            </h1>
          </li>
        ))}
      </div>
      <h1 className="absolute right-2 bottom-2 text-2xl font-bold text-[#164864] font-montserrat">
        Total Price: {orderList.totalPrice},00 RSD
      </h1>
      Status: {localStorageDataOrder.status}
    </li>
  );
};

export default StatusPageCard;
