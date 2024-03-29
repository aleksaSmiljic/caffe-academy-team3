import React, { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import { CoffeeCardModal } from "../components/CoffeeCardModal";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, setCart, setOrderAmound, setFinishedOrder, id, setId } =
    useContext(OrderContext);

  const [editCoffee, setEditCoffee] = useState(null);

  function openModal(coffee) {
    setEditCoffee(coffee);
    document.body.style.overflow = "hidden";
    console.log(coffee);
  }

  function closeModal() {
    setEditCoffee(null);
    document.body.style.overflow = "auto";
  }

  function handleDelete(id, amound) {
    setCart((oldCart) => oldCart.filter((item) => item.id !== id));
    setOrderAmound((old) => old - amound);
  }

  function handleOrder() {
    const totalPrice = cart?.reduce((acc, curr) => acc + curr.totalPrice, 0);
    setId((old) => old + 1);
    setFinishedOrder((old) => [
      ...old,
      { id: id, order: cart, totalPrice: totalPrice },
    ]);
    setOrderAmound(0);
    setCart([]);
  }

  return (
    <div>
      <div>
        {editCoffee && (
          <CoffeeCardModal
            editAmount={editCoffee.amound}
            editSelectedCoffeeBeann={editCoffee.bean}
            editCoffeeSizee={editCoffee.size}
            editSelectedSizePricee={editCoffee.price}
            title={editCoffee.name}
            description={editCoffee.description}
            price={editCoffee.price}
            hasMilk={editCoffee.hasMilk}
            closeModal={closeModal}
            editMilk={editCoffee.typeOfMilk}
            editTotalPrice={editCoffee.totalPrice}
            editCoffee={editCoffee}
          />
        )}
        <ul>
          {cart?.map((coffee) => (
            <>
              <li key={coffee.id}>
                <div className="px-4 py-5 sm:px-6 border-b-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-2xl leading-6 font-medium font-montserrat text-gray-900">
                      {coffee.name}
                    </h3>
                    <p className="mt-1 max-w-2xl text-sm md:text-xl text-gray-500 font-montserrat">{`${
                      coffee.size
                    }/${coffee.bean}${
                      coffee.typeOfMilk ? "/" + coffee.typeOfMilk : ""
                    }`}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm md:text-lg font-medium font-montserrat text-gray-500">
                      Price:
                      <span className="mx-5 md:text-2xl text-[#164864]">
                        {coffee.price[coffee.size] * coffee.amound},00 RSD
                      </span>
                      <span>({coffee.amound} kom)</span>
                    </p>
                    <div className="flex flex-row">
                      <button
                        onClick={() => handleDelete(coffee.id, coffee.amound)}
                        className="font-medium text-red-400 hover:text-red-600 duration-200 mx-5"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => openModal(coffee)}
                        className="font-medium text-[#248CC5] hover:text-[#164864] duration-200"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="flex justify-end mx-4 my-4">
        <Link to="/status">
          <button
            disabled={cart.length === 0}
            onClick={() => {
              handleOrder();
            }}
            className="text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md py-2 px-4"
          >
            TOTAL: {cart?.reduce((acc, curr) => acc + curr.totalPrice, 0)}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
