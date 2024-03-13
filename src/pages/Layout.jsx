import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const Layout = () => {
  return (
    <>
      <Header>
        <main>
          <Outlet />
        </main>
      </Header>
    </>
  );
};

export default Layout;
