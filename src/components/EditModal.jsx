import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import EditModalForm from "./EditModalForm";

const EditModal = ({ handleClose, coffeeSize, coffee, closeModal }) => {
  const { cart, setCart, orderAmound } = useContext(OrderContext);

  const [editedCoffee] = cart.filter((item) => item.id === coffee.id);

  const [coffeeEdit, setCoffeeEdit] = useState(editedCoffee);

  function handleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setCoffeeEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmitOrder(e) {
    e.preventDefault();
    closeModal();
    const editedCart = cart.filter((item) => item.id !== coffee.id);
    editedCart.push(coffeeEdit);
    console.log(editedCoffee);
    console.log(coffeeEdit);
    console.log(orderAmound);
    setCart(editedCart);
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10"
      onClick={handleClose}
      id="modalWrapper"
    >
      <div className="w-[500px] m-4">
        <div className="bg-white p-2 border border-black h-[540px] md:h-[700px] ">
          <div className="flex flex-row justify-between my-4 mx-2">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-lg md:text-2xl font-montserrat">
                {coffee.name}
              </h1>
              <h1 className="font-semibold text-lg md:text-2xl text-[#248CC5] font-montserrat">
                {coffee.totalPrice},00 RSD
              </h1>
            </div>
            <div>
              <img
                src={`${coffee.size}.png`}
                alt="coffee-cup"
                className={`h-20 md:h-30 md:w-20 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden${
                  coffee.size === "medium" ? "h-22" : ""
                } ${coffee.size === "large" ? "h-24" : ""}`}
              />
            </div>
          </div>
          <div className="block">
            <p className="text-md mb-10  md:text-base font-semibold text-gray-500 font-montserrat">
              Edit your choise:
            </p>
          </div>
          <EditModalForm
            handleSubmitOrder={handleSubmitOrder}
            hasMilk={coffee.milk}
            amound={coffee.amound}
            price={coffee.price}
            handleInputChange={handleInputChange}
            totalPrice={coffee.totalPrice}
            id={coffee.id}
          />
        </div>
      </div>
    </div>
  );
};

export default EditModal;
