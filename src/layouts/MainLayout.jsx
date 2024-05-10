import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen lg:pl-72">
        <Outlet  />
      </div>
    </>
  )
};

export default MainLayout;