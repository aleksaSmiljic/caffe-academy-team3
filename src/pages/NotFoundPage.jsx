import { Link } from "react-router-dom";
export function NotFoundPage() {
  return (
    // <div>
    //   <h1>404 Not Found</h1>
    //   <p>
    //     <Link to="/">Home</Link>
    //   </p>
    // </div>
    <div className="flex flex-col bg-white items-center justify-center w-full h-screen">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl font-montserrat text-center">404 Not Found!</h2>
        <h2 className="text-lg m-6 text-center font-montserrat">
          Stranica koju tražite nije pronadjena, molimo vas da se vratite na
          početnu stranu.
        </h2>
        <button className="block py-2 px-4 my-10 w-[200px] text-xl md:text-2xl text-white bg-[#248CC5] hover:bg-[#164864] duration-300 rounded-md font-montserrat">
          <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
}
