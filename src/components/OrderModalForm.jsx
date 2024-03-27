import { useContext } from "react";
import { LoginContext } from "../context/loginContext";
import { OrderContext } from "../context/OrderContext";

const OrderModalForm = ({
  handleSubmitOrder,
  handleSizePickPrice,
  handleSizePick,
  handleMilkPick,
  handleCoffeeBeanPick,
  handleIncreaseAmound,
  handleDecreaseAmound,
  hasMilk,
  selectedCoffeeBean,
  selectedSizePrice,
  amound,
  coffee,
  editCoffee,
}) => {
  const { login } = useContext(LoginContext);
  const { orderAmound } = useContext(OrderContext);

  return (
    <form
      onSubmit={(e) => handleSubmitOrder(e, editCoffee ?? coffee)}
      className="my-2 md:my-10"
    >
      <h1 className="text-md md:text-lg font-montserrat text-[#164864] font-semibold">
        Odaberite veličinu
      </h1>
      <div className="flex flex-col">
        <label>
          <input
            type="radio"
            name="size"
            value="small"
            onChange={(e) => {
              handleSizePick(e, editCoffee ?? coffee);
              handleSizePickPrice(e, editCoffee ?? coffee);
            }}
          />
          <span className="mx-2">Mala</span>
        </label>
        <label className="flex justify-between">
          <div>
            <input
              type="radio"
              name="size"
              value="medium"
              onChange={(e) => {
                handleSizePick(e, editCoffee ?? coffee);
                handleSizePickPrice(e, editCoffee ?? coffee);
              }}
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
              name="size"
              value="large"
              onChange={(e) => {
                handleSizePick(e, editCoffee ?? coffee);
                handleSizePickPrice(e, editCoffee ?? coffee);
              }}
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
                name="bean"
                value="brazil"
                onChange={(e) => handleCoffeeBeanPick(e, editCoffee ?? coffee)}
              />
              <span className="mx-2">Brazil</span>
            </label>
            <label className="">
              <input
                type="radio"
                name="bean"
                value="kuba"
                onChange={(e) => handleCoffeeBeanPick(e, editCoffee ?? coffee)}
              />
              <span className="mx-2">Kuba</span>
            </label>
            <label className="">
              <input
                type="radio"
                name="bean"
                value="etiopija"
                onChange={(e) => handleCoffeeBeanPick(e, editCoffee ?? coffee)}
              />
              <span className="mx-2">Etiopija</span>
            </label>
          </div>
        </div>
        <div>
          {editCoffee?.milk ?? coffee?.milk ? (
            <div className="mx-4">
              <h1 className="text-md md:text-lg font-montserrat my-1 text-[#164864] font-semibold">
                Odaberite mleko
              </h1>
              <div className="flex flex-col">
                <label>
                  <input
                    type="radio"
                    name="milk"
                    value="regular"
                    onChange={(e) => handleMilkPick(e, editCoffee ?? coffee)}
                  />
                  <span className="mx-2">Regularno</span>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="milk"
                    value="soy"
                    onChange={(e) => handleMilkPick(e, editCoffee ?? coffee)}
                  />
                  <span className="mx-2">Sojno</span>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="milk"
                    value="almond"
                    onChange={(e) => handleMilkPick(e, editCoffee ?? coffee)}
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
              disabled={amound === 0 || !login}
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
              disabled={amound === 10 || orderAmound === 10 || !login}
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
    </form>
  );
};

export default OrderModalForm;
