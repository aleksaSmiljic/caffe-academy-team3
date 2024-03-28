import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderModalForm from "./OrderModalForm";

export function CoffeeCardModal({
  coffee,
  editCoffee,
  closeModal,
  title,
  hasMilk,
  price,
}) {
  const { cart } = useContext(OrderContext);

  const coffeeSizePrice = {
    small: editCoffee?.price.small ?? coffee?.price?.small,
    medium: editCoffee?.price.medium ?? coffee?.price?.medium,
    large: editCoffee?.price.large ?? coffee?.price?.large,
  };

  const coffeeSizes = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  const { setCart, orderId, setOrderId, setOrderAmound, orderAmound } =
    useContext(OrderContext);

  const [amound, setAmound] = useState(editCoffee?.amound ?? 0);

  const [selectedCoffeeBean, setSelectedCoffeeBean] = useState(
    editCoffee?.bean ?? "brazil"
  );

  const [coffeeSize, setCoffeeSize] = useState(
    editCoffee?.size ?? coffeeSizes.small
  );

  const [selectedSizePrice, setSelectedSizePrice] = useState(
    editCoffee?.priceOfOneCoffee ?? coffeeSizePrice.small
  );

  const [coffeeMilk, setCoffeeMilk] = useState(editCoffee?.milk ?? "regular");

  function handleSizePick(e, coffee) {
    const value = e.target.value;
    setCoffeeSize(value);
    coffee = { ...coffee, size: value };
  }

  function handleSizePickPrice(e, coffee) {
    const value = e.target.value;
    setSelectedSizePrice(coffeeSizePrice[value]);
    coffee = { ...coffee, price: price };
    coffee = { ...coffee, priceOfOneCoffee: selectedSizePrice };
  }

  function handleCoffeeBeanPick(e, coffee) {
    const bean = e.target.value;
    setSelectedCoffeeBean(bean);
    coffee = { ...coffee, bean: selectedCoffeeBean };
  }

  function handleMilkPick(e) {
    const milk = e.target.value;
    setCoffeeMilk(milk);
  }

  function handleClose(e) {
    if (e.target.id === "wrapper") closeModal();
  }

  function handleIncreaseAmound() {
    setAmound((old) => old + 1);
    setOrderAmound((old) => old + 1);
    console.log(orderAmound);
  }

  function handleDecreaseAmound() {
    setAmound((old) => old - 1);
    setOrderAmound((old) => old - 1);
    console.log(orderAmound);
  }

  function handleSubmitOrder(e, coffee) {
    e.preventDefault();

    if (coffee?.hasOwnProperty("totalPrice")) {
      const coffeEdit = cart.map((item) => {
        if (item.id !== coffee.id) {
          return item;
        } else {
          return {
            ...item,
            name: title,
            size: coffeeSize,
            bean: selectedCoffeeBean,
            typeOfMilk: coffeeMilk,
            amound: amound,
            priceOfOneCoffee: selectedSizePrice,
            totalPrice: selectedSizePrice * amound,
          };
        }
      });
      setCart(coffeEdit);
    } else {
      setOrderId((oldOrderId) => oldOrderId + 1);
      const order = {
        ...coffee,
        id: orderId,
        name: coffee.name,
        size: coffeeSize,
        bean: selectedCoffeeBean,
        // milk: hasMilk,
        typeOfMilk: coffee.milk ? coffeeMilk : null,
        amound: amound,
        priceOfOneCoffee: selectedSizePrice,
        totalPrice: selectedSizePrice * amound,
      };
      setCart((oldCart) => [...oldCart, order]);
    }
    console.log(orderAmound);
    closeModal();
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[500px] m-4">
        <div className="bg-white p-2 border border-black h-[540px] md:h-[650px] ">
          <div className="flex flex-row justify-between my-4 mx-2">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-lg md:text-2xl font-montserrat">
                {editCoffee?.name ?? coffee?.name}
              </h1>
              <h1 className="font-semibold text-lg md:text-2xl text-[#248CC5] font-montserrat">
                {editCoffee?.coffeeSizePrice?.[editCoffee?.size] ??
                  coffee?.coffeeSizePrice?.[coffee?.size] ??
                  selectedSizePrice}
                ,00 RSD
              </h1>
            </div>
            <div>
              <img
                src={`${coffeeSize}.png`}
                alt="coffee-cup"
                className={`h-20 md:h-30 md:w-20 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden${
                  coffeeSize === "medium" ? "h-22" : ""
                } ${coffeeSize === "large" ? "h-24" : ""}`}
              />
            </div>
          </div>
          <div className="block">
            <p className="text-xs md:text-base font-semibold text-gray-500 font-montserrat">
              {editCoffee?.description.long ?? coffee.description.long}
            </p>
          </div>
          <OrderModalForm
            selectedCoffeeBean={selectedCoffeeBean}
            coffeeMilk={coffeeMilk}
            coffeeSize={coffeeSize}
            coffee={coffee}
            editCoffee={editCoffee}
            handleSubmitOrder={handleSubmitOrder}
            handleSizePickPrice={handleSizePickPrice}
            handleSizePick={handleSizePick}
            handleIncreaseAmound={handleIncreaseAmound}
            handleDecreaseAmound={handleDecreaseAmound}
            handleMilkPick={handleMilkPick}
            handleCoffeeBeanPick={handleCoffeeBeanPick}
            hasMilk={hasMilk}
            amound={amound}
            selectedSizePrice={selectedSizePrice}
            setAmound={setAmound}
          />
        </div>
      </div>
    </div>
  );
}
