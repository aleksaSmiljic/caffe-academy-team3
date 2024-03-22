import { useState } from "react";

export function CoffeeCardModal({ title, description, price, closeModal }) {
  const coffeeSizePrice = {
    small: price.small,
    medium: price.medium,
    large: price.large,
  };

  const coffeeSizes = {
    small: "small",
    medium: "medium",
    large: "large",
  };

  const [coffeeSize, setCoffeeSize] = useState(coffeeSizes.small);

  const [selectedSizePrice, setSelectedSizePrice] = useState(
    coffeeSizePrice.small
  );

  function handleSizePickPrice(e) {
    const value = e.target.value;
    setCoffeeSize(value);
    setSelectedSizePrice(coffeeSizePrice[value]);
  }

  function handleClose(e) {
    if (e.target.id === "wrapper") closeModal();
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center z-10"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[500px] m-4">
        <div className="bg-white p-2 border border-black h-[500px] md:h-[600px] ">
          <div className="flex flex-row justify-between my-4 mx-2">
            <div className="flex flex-col ">
              <h1 className="font-semibold text-lg font-montserrat">{title}</h1>
              <h1 className="font-semibold text-lg text-[#248CC5] font-montserrat">
                {price.small}
              </h1>
            </div>
            <div>
              <img
                src={`${coffeeSize}.png`}
                alt="coffee-cup"
                className="h-20 lg:h-auto lg:w-28 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              />
            </div>
          </div>
          <div className="block">
            <p className="text-sm font-semibold text-gray-500 font-montserrat">
              {description.long}
            </p>
          </div>
          <form className="my-4 md:my-10">
            <h1 className="text-xl font-montserrat">Odaberite veličinu</h1>
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
              <label>
                <div>
                  <input
                    type="radio"
                    name="coffeeSize"
                    value="medium"
                    onChange={handleSizePickPrice}
                  />
                  <span className="mx-2">Srednja</span>
                </div>
                <span>+10,00 RSD</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="coffeeSize"
                  value="large"
                  onChange={handleSizePickPrice}
                />
                <span className="mx-2">Velika</span>
                <span>+20,00 RSD</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
