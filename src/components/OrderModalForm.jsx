import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";

const OrderModalForm = ({
  handleSubmitOrder,
  handleSizePickPrice,
  handleSizePick,
  handleMilkPick,
  handleCoffeeBeanPick,
  handleIncreaseAmound,
  handleDecreaseAmound,
  selectedCoffeeBean,
  selectedSizePrice,
  amound,
  coffee,
  editCoffee,
}) => {
  const { orderAmound } = useContext(OrderContext);
  const [checkedFields, setCheckedFilds] = useState({
    size: editCoffee?.size ?? "small",
    bean: editCoffee?.bean ?? "brazil",
    milk: editCoffee?.typeOfMilk ?? "regular",
  });

  let isDisabled = false;

  function handleInputChange(e) {
    const { name, value } = e.target;
    setCheckedFilds((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function disableOrder() {
    if (!editCoffee?.amound) {
      if (orderAmound + amound > 10) {
        isDisabled = true;
        return true;
      } else {
        isDisabled = false;
        return false;
      }
    } else if (editCoffee?.amound > amound) {
      isDisabled = false;

      return false;
    } else if (editCoffee?.amound < amound) {
      if (amound - editCoffee.amound + orderAmound > 10) {
        isDisabled = true;
        return true;
      } else {
        isDisabled = false;

        return false;
      }
    }
  }

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
              handleInputChange(e);
            }}
            checked={checkedFields.size === "small"}
          />
          <span className="mx-2 font-montserrat">Mala</span>
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
                handleInputChange(e);
              }}
              checked={checkedFields.size === "medium"}
            />
            <span className="mx-2 font-montserrat">Srednja</span>
          </div>
          <div>
            <span className="text-[#248CC5] font-montserrat">+10,00 RSD</span>
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
                handleInputChange(e);
              }}
              checked={checkedFields.size === "large"}
            />
            <span className="mx-2 font-montserrat">Velika</span>
          </div>
          <div>
            <span className="text-[#248CC5] font-montserrat">+20,00 RSD</span>
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
                onChange={(e) => {
                  handleCoffeeBeanPick(e, editCoffee ?? coffee);
                  handleInputChange(e);
                }}
                checked={checkedFields.bean === "brazil"}
              />
              <span className="mx-2 font-montserrat">Brazil</span>
            </label>
            <label className="">
              <input
                type="radio"
                name="bean"
                value="kuba"
                onChange={(e) => {
                  handleCoffeeBeanPick(e, editCoffee ?? coffee);
                  handleInputChange(e);
                }}
                checked={checkedFields.bean === "kuba"}
              />
              <span className="mx-2 font-montserrat">Kuba</span>
            </label>
            <label className="">
              <input
                type="radio"
                name="bean"
                value="etiopija"
                onChange={(e) => {
                  handleCoffeeBeanPick(e, editCoffee ?? coffee);
                  handleInputChange(e);
                }}
                checked={checkedFields.bean === "etiopija"}
              />
              <span className="mx-2 font-montserrat">Etiopija</span>
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
                    onChange={(e) => {
                      handleMilkPick(e, editCoffee ?? coffee);
                      handleInputChange(e);
                    }}
                    checked={checkedFields.milk === "regular"}
                  />
                  <span className="mx-2 font-montserrat">Regularno</span>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="milk"
                    value="soy"
                    onChange={(e) => {
                      handleMilkPick(e, editCoffee ?? coffee);
                      handleInputChange(e);
                    }}
                    checked={checkedFields.milk === "soy"}
                  />
                  <span className="mx-2 font-montserrat">Sojno</span>
                </label>
                <label className="">
                  <input
                    type="radio"
                    name="milk"
                    value="almond"
                    onChange={(e) => {
                      handleMilkPick(e, editCoffee ?? coffee);
                      handleInputChange(e);
                    }}
                    checked={checkedFields.milk === "almond"}
                  />
                  <span className="mx-2 font-montserrat">Bademovo</span>
                </label>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="h-10 bg-gray-300 text-black border mx-2 flex flex-row justify-between items-center w-[200px] md:w-[250] rounded-md">
          <div className="border-2 border-[#248CC5] md:hover:border-[#164864] rounded-full w-7 h-7 flex justify-center items-center md:ml-2 ml-1 transform md:hover:scale-90 transition duration-200">
            <button
              type="button"
              className="font-bold text-xl"
              onClick={handleDecreaseAmound}
              disabled={amound === 0}
            >
              -
            </button>
          </div>
          <div>
            <span className="font-bold text-2xl">{amound}</span>
          </div>
          <div className="border-2 border-[#248CC5] md:hover:border-[#164864] rounded-full w-7 h-7 flex justify-center items-center md:mr-2 mr-1 transform md:hover:scale-90 transition duration-200">
            <button
              type="button"
              className="font-bold text-xl"
              disabled={amound === 10}
              onClick={handleIncreaseAmound}
            >
              +
            </button>
          </div>
        </div>
        <button
          id="orderBtn"
          className="h-10 bg-[#248CC5] hover:bg-[#164864] duration-300 text-white font-montserrat w-full rounded-md"
          disabled={
            amound === 0 || selectedCoffeeBean === null || disableOrder()
          }
        >
          <div>Poruči {amound * selectedSizePrice}</div>
        </button>
      </div>
      {isDisabled ? (
        <p className="mt-2 mx-2 flex justify-center text-red-400 font-medium font-montserrat md:text-lg text-sm">
          Maksimum od 10 kafa po porudžbini
        </p>
      ) : (
        ""
      )}
    </form>
  );
};

export default OrderModalForm;
