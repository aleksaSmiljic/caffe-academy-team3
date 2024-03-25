import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import OrderModalForm from "./OrderModalForm";

export function CoffeeCardModal({
  title,
  description,
  price,
  hasMilk,
  closeModal,
  amount,
  selectedCoffeeBeann,
  milk,
  selectedSizePricee,
  coffeeSizee,
  totalPrice,
}) {
  const coffeeSizePrice = {
    small: price?.small,
    medium: price?.medium,
    large: price?.large,
  };

  const coffeeSizes = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  const { setCart, orderId, setOrderId, setOrderAmound, orderAmound } =
    useContext(OrderContext);

  const [amound, setAmound] = useState(amount ?? 0);

  const [selectedCoffeeBean, setSelectedCoffeeBean] = useState(
    selectedCoffeeBeann ?? null
  );

  const [coffeeSize, setCoffeeSize] = useState(
    coffeeSizee ?? coffeeSizes.small
  );

  const [selectedSizePrice, setSelectedSizePrice] = useState(
    selectedSizePricee ?? coffeeSizePrice.small
  );

  const [coffeeMilk, setCoffeeMilk] = useState(milk ?? "regular");

  function handleSizePickPrice(e) {
    const value = e.target.value;
    setCoffeeSize(value);
    setSelectedSizePrice(coffeeSizePrice[value]);
  }

  function handleCoffeeBeanPick(e) {
    const bean = e.target.value;
    setSelectedCoffeeBean(bean);
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
  }

  function handleDecreaseAmound() {
    setAmound((old) => old - 1);
    setOrderAmound((old) => old - 1);
  }

  function handleSubmitOrder(e) {
    e.preventDefault();
    closeModal();
    setOrderId((oldOrderId) => oldOrderId + 1);
    const order = {
      id: orderId,
      name: title,
      size: coffeeSize,
      bean: selectedCoffeeBean,
      milk: hasMilk ? coffeeMilk : "",
      amound: amound,
      price: selectedSizePrice,
      totalPrice: selectedSizePrice * amound,
    };
    setCart((oldCart) => [...oldCart, order]);
    console.log(orderAmound);
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[500px] m-4">
        <div className="bg-white p-2 border border-black h-[540px] md:h-[700px] ">
          <div className="flex flex-row justify-between my-4 mx-2">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-lg md:text-2xl font-montserrat">
                {title}
              </h1>
              <h1 className="font-semibold text-lg md:text-2xl text-[#248CC5] font-montserrat">
                {selectedSizePrice},00 RSD
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
              {description ? description.long : ""}
            </p>
          </div>
          <OrderModalForm
            handleSubmitOrder={handleSubmitOrder}
            handleSizePickPrice={handleSizePickPrice}
            handleIncreaseAmound={handleIncreaseAmound}
            handleDecreaseAmound={handleDecreaseAmound}
            handleMilkPick={handleMilkPick}
            handleCoffeeBeanPick={handleCoffeeBeanPick}
            hasMilk={hasMilk}
            amound={amound}
            selectedCoffeeBean={selectedCoffeeBean}
            selectedSizePrice={selectedSizePrice}
            setAmound={setAmound}
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <form onSubmit={handleSubmitOrder} className="my-2 md:my-10">
            <h1 className="text-md md:text-lg font-montserrat text-[#164864] font-semibold">
              Odaberite veličinu
            </h1>
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  name="coffeeSize"
                  value="small"
                  onChange={handleSizePickPrice}
                />
                <span className="mx-2">Mala</span>
              </label>
              <label className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    name="coffeeSize"
                    value="medium"
                    onChange={handleSizePickPrice}
                  />
                  <span className="mx-2">Srednja</span>
                </div>
                <div>
                  <span className="text-[#248CC5]">+10,00 RSD</span>
                </div>
              </label>
              <label className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    name="coffeeSize"
                    value="large"
                    onChange={handleSizePickPrice}
                  />
                  <span className="mx-2">Velika</span>
                </div>
                <div>
                  <span className="text-[#248CC5]">+20,00 RSD</span>
                </div>
              </label>
            </div>
            <div className="flex flex-row justify-between my-6">
              <div>
                <h1 className="text-md md:text-lg font-montserrat my-1 text-[#164864] font-semibold">
                  Odaberite zrno
                </h1>
                <div className="flex flex-col">
                  <label>
                    <input
                      type="radio"
                      name="coffeeType"
                      value="brazil"
                      onChange={handleCoffeeBeanPick}
                    />
                    <span className="mx-2">Brazil</span>
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="coffeeType"
                      value="kuba"
                      onChange={handleCoffeeBeanPick}
                    />
                    <span className="mx-2">Kuba</span>
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="coffeeType"
                      value="etiopija"
                      onChange={handleCoffeeBeanPick}
                    />
                    <span className="mx-2">Etiopija</span>
                  </label>
                </div>
              </div>
              <div>
                {hasMilk ? (
                  <div className="mx-4">
                    <h1 className="text-md md:text-lg font-montserrat my-1 text-[#164864] font-semibold">
                      Odaberite mleko
                    </h1>
                    <div className="flex flex-col">
                      <label>
                        <input
                          type="radio"
                          name="coffeeMilk"
                          value="regular"
                          onChange={handleMilkPick}
                        />
                        <span className="mx-2">Regularno</span>
                      </label>
                      <label className="">
                        <input
                          type="radio"
                          name="coffeeMilk"
                          value="soy"
                          onChange={handleMilkPick}
                        />
                        <span className="mx-2">Sojno</span>
                      </label>
                      <label className="">
                        <input
                          type="radio"
                          name="coffeeMilk"
                          value="almond"
                          onChange={handleMilkPick}
                        />
                        <span className="mx-2">Bademovo</span>
                      </label>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[150px] h-10 bg-gray-300 text-black border border-black mx-2 flex flex-row justify-between items-center">
                <div className="border-2 border-[#164864] rounded-full w-5 h-5 flex justify-center items-center mx-4">
                  <button
                    type="button"
                    className="font-bold text-lg"
                    onClick={handleDecreaseAmound}
                    disabled={amound === 0}
                  >
                    -
                  </button>
                </div>
                <div>
                  <span className="font-bold text-2xl">{amound}</span>
                </div>
                <div className="border-2 border-[#164864] rounded-full w-5 h-5 flex justify-center items-center mx-4">
                  <button
                    type="button"
                    className="font-bold text-lg"
                    disabled={amound === 10 || orderAmound === 10}
                    onClick={handleIncreaseAmound}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="w-[150px] h-10 bg-[#164864] text-white"
                disabled={!login || amound === 0 || selectedCoffeeBean === null}
              >
                Poruči {amound * selectedSizePrice}
              </button>
            </div>
          </form> */
}
{
  /* <form onSubmit={handleSubmitOrder} className="my-2 md:my-10">
            <h1 className="text-md md:text-lg font-montserrat text-[#164864] font-semibold">
              Odaberite veličinu
            </h1>
            <div className="flex flex-col">
              <label>
                <input
                  type="radio"
                  name="coffeeSize"
                  value="small"
                  onChange={handleSizePickPrice}
                />
                <span className="mx-2">Mala</span>
              </label>
              <label className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    name="coffeeSize"
                    value="medium"
                    onChange={handleSizePickPrice}
                  />
                  <span className="mx-2">Srednja</span>
                </div>
                <div>
                  <span className="text-[#248CC5]">+10,00 RSD</span>
                </div>
              </label>
              <label className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    name="coffeeSize"
                    value="large"
                    onChange={handleSizePickPrice}
                  />
                  <span className="mx-2">Velika</span>
                </div>
                <div>
                  <span className="text-[#248CC5]">+20,00 RSD</span>
                </div>
              </label>
            </div>
            <div className="flex flex-row justify-between my-6">
              <div>
                <h1 className="text-md md:text-lg font-montserrat my-1 text-[#164864] font-semibold">
                  Odaberite zrno
                </h1>
                <div className="flex flex-col">
                  <label>
                    <input
                      type="radio"
                      name="coffeeType"
                      value="brazil"
                      onChange={handleCoffeeBeanPick}
                    />
                    <span className="mx-2">Brazil</span>
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="coffeeType"
                      value="kuba"
                      onChange={handleCoffeeBeanPick}
                    />
                    <span className="mx-2">Kuba</span>
                  </label>
                  <label className="">
                    <input
                      type="radio"
                      name="coffeeType"
                      value="etiopija"
                      onChange={handleCoffeeBeanPick}
                    />
                    <span className="mx-2">Etiopija</span>
                  </label>
                </div>
              </div>
              <div>
                {hasMilk ? (
                  <div className="mx-4">
                    <h1 className="text-md md:text-lg font-montserrat my-1 text-[#164864] font-semibold">
                      Odaberite mleko
                    </h1>
                    <div className="flex flex-col">
                      <label>
                        <input
                          type="radio"
                          name="coffeeMilk"
                          value="regular"
                          onChange={handleMilkPick}
                        />
                        <span className="mx-2">Regularno</span>
                      </label>
                      <label className="">
                        <input
                          type="radio"
                          name="coffeeMilk"
                          value="soy"
                          onChange={handleMilkPick}
                        />
                        <span className="mx-2">Sojno</span>
                      </label>
                      <label className="">
                        <input
                          type="radio"
                          name="coffeeMilk"
                          value="almond"
                          onChange={handleMilkPick}
                        />
                        <span className="mx-2">Bademovo</span>
                      </label>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-[150px] h-10 bg-gray-300 text-black border border-black mx-2 flex flex-row justify-between items-center">
                <div className="border-2 border-[#164864] rounded-full w-5 h-5 flex justify-center items-center mx-4">
                  <button
                    type="button"
                    className="font-bold text-lg"
                    onClick={handleDecreaseAmound}
                    disabled={amound === 0}
                  >
                    -
                  </button>
                </div>
                <div>
                  <span className="font-bold text-2xl">{amound}</span>
                </div>
                <div className="border-2 border-[#164864] rounded-full w-5 h-5 flex justify-center items-center mx-4">
                  <button
                    type="button"
                    className="font-bold text-lg"
                    disabled={amound === 10 || orderAmound === 10}
                    onClick={handleIncreaseAmound}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="w-[150px] h-10 bg-[#164864] text-white"
                disabled={!login || amound === 0 || selectedCoffeeBean === null}
              >
                Poruči {amound * selectedSizePrice}
              </button>
            </div>
          </form> */
}

{
  /* <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[500px] m-4">
        <div className="bg-white p-2 border border-black h-[540px] md:h-[700px] ">
          <div className="flex flex-row justify-between my-4 mx-2">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-lg md:text-2xl font-montserrat">
                {title}
              </h1>
              <h1 className="font-semibold text-lg md:text-2xl text-[#248CC5] font-montserrat">
                {selectedSizePrice},00 RSD
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
              {description ? description.long : ""}
            </p>
          </div> */
}
