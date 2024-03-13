import data from "../data/coffee-list.json";
import Card from "./Card";

export function CardsList() {
  const coffeList = data;

  return (
    <div className="">
      <ul className="sm:w-[90%] md:w-[90%] w-full lg:max-w-full grid grid-cols-1 md:grid-cols-2 ">
        {coffeList?.map((coffe) => (
          <Card
            key={coffe.name}
            title={coffe.name}
            description={coffe.description.short}
            price={coffe.price.small}
          />
        ))}
      </ul>
    </div>
  );
}
