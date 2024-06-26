const Card = ({ title, description, price, coffee, openModal }) => {
  return (
    <>
      <li
        onClick={() => openModal(coffee)}
        className="flex justify-center items-center border-black border m-2 bg-gray-200 md:hover:bg-gray-300 transform md:hover:scale-95 transition duration-200 rounded-lg"
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
