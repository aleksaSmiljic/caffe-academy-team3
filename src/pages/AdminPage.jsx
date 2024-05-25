import { useContext, useState } from "react";
import { OrderContext } from "../context/OrderContext";
import AdminStatusCard from "../components/AdminStatusCard";
import { LoginContext } from "../context/loginContext";
import { Link } from "react-router-dom";

export function AdminPage() {
  const { isAdmin } = useContext(LoginContext);
  const { finishedOrder } = useContext(OrderContext);
  // let lsCart = JSON.parse(localStorage.getItem("cart"));

  return (
    <div>
      {isAdmin ? (
        <>
          <h1 className="text-xl font-bold flex justify-center my-2">
            STATUS PORUDŽBINA
          </h1>
          <div className="md:flex md:justify-center md:items-center">
            <ul className="sm:w-full lg:max-w-full  grid grid-cols-1 md:grid-cols-2">
              {finishedOrder?.map((orderList) => (
                <AdminStatusCard key={orderList?.id} orderList={orderList} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
          <div className="flex justify-center items-center flex-col">
            <h2 className="text-3xl font-montserrat text-center">
              Pristup dozvoljen samo za zaposlene!
            </h2>
            <button className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
              <Link to="/">Home Page</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
