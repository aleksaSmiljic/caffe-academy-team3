import data from "../data/coffee-list.json";
import Card from "./Card";

export function CardsList() {
  const coffeList = data;

  return (
    <div className="">
      <ul className="w-full lg:max-w-full grid grid-cols-1 md:grid-cols-2 ">
        {coffeList?.map((coffee) => (
          <Card
            key={coffee.name}
            title={coffee.name}
            description={coffee.description}
            price={coffee.price}
            hasMilk={coffee.milk}
            coffee={coffee}
          />
        ))}
      </ul>
    </div>
  );
}
