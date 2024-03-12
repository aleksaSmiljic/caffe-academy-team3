import data from "../data/coffee-list.json";

export function Cards() {
  const coffeList = data;

  return (
    <div className="sm:w-[90%] md:w-[90%] w-full lg:max-w-full">
      {coffeList?.map((coffe) => (
        <ul
          className="flex justify-center items-center border-black border m-6 bg-gray-200 transform hover:scale-95 transition duration-200 "
          key={coffe.name}
        >
          <li className="flex justify-between items-center">
            <div className="p-3 md:left-2">
              <p className="text-gray-800 font-bold text-xl font-montserrat">
                {coffe?.name}
              </p>
              <p className="text-gray-600  font-montserrat text-sm font-semibold">
                {coffe.description.short}
              </p>
              <p className="font-bold text-xl text-[#248CC5] font-montserrat ">
                {coffe.price.small} RSD
              </p>
            </div>
            <img
              src="small.png"
              alt={coffe?.name}
              className="h-32 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden right-5 m-2"
            />
          </li>
        </ul>
      ))}
    </div>
  );
}
