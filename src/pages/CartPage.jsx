import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

const CartPage = () => {
  const { cart } = useContext(OrderContext);

  return (
    <div>
      <div>
        <ul>
          {cart.map((coffee) => (
            <li key={coffee.id}>
              <div className="px-4 py-5 sm:px-6 border-b-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-2xl leading-6 font-medium font-montserrat text-gray-900">
                    {coffee.name}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm md:text-xl text-gray-500 font-montserrat">{`${coffee.size}/${coffee.bean}/${coffee.milk}`}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm md:text-lg font-medium font-montserrat text-gray-500">
                    Price:
                    <span className="mx-5 md:text-2xl text-[#164864]">
                      {coffee.price}
                    </span>
                    <span>({coffee.amound})</span>
                  </p>
                  <div className="flex flex-row">
                    <button className="font-medium text-red-400 hover:text-red-600 mx-5">
                      Delete
                    </button>
                    <button className="font-medium text-[#248CC5] hover:text-[#164864]">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CartPage;
