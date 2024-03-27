import { useState } from "react";
import data from "../data/coffee-list.json";
import Card from "./Card";
import { CoffeeCardModal } from "./CoffeeCardModal";

export function CardsList() {
  const coffeList = data;

  const [newCoffee, setNewCoffee] = useState(null);

  function openModal(coffee) {
    setNewCoffee(coffee);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setNewCoffee(null);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="">
      {newCoffee && (
        <CoffeeCardModal
          coffee={newCoffee}
          // title={title}
          // description={description}
          // price={price}
          // hasMilk={hasMilk}
          closeModal={closeModal}
        />
      )}
      <ul className="w-full lg:max-w-full grid grid-cols-1 md:grid-cols-2 ">
        {coffeList?.map((coffee) => (
          <Card
            openModal={openModal}
            coffee={coffee}
            key={coffee.name}
            title={coffee.name}
            description={coffee.description}
            price={coffee.price}
            hasMilk={coffee.milk}
          />
        ))}
      </ul>
    </div>
  );
}
