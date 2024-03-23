import { useState } from "react";
import { CoffeeCardModal } from "./CoffeeCardModal";

const Card = ({ title, description, price, hasMilk }) => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <>
      {modalOpen ? (
        <CoffeeCardModal
          title={title}
          description={description}
          price={price}
          hasMilk={hasMilk}
          closeModal={closeModal}
        />
      ) : null}
      <li
        onClick={openModal}
        className="flex justify-center items-center border-black border m-2 bg-gray-200 transform hover:scale-95 transition duration-200"
      >
        <div className="flex justify-between items-center">
          <div className="p-2 md:left-2">
            <p className="text-gray-800 font-bold text-xl font-montserrat">
              {title}
            </p>
            <p className="text-gray-600  font-montserrat text-sm font-semibold">
              {description.short}
            </p>
            <p className="font-bold text-xl text-[#248CC5] font-montserrat ">
              {price.small} RSD
            </p>
          </div>
          <img
            src="small.png"
            alt={title}
            className="h-32 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden right-2 m-2"
          />
        </div>
      </li>
    </>
  );
};

export default Card;
