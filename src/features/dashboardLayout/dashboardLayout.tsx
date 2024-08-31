import { Outlet } from "react-router-dom";

import { Header, Sidebar } from ".";

const dashboardLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="w-[calc(100%-18rem)] float-right min-h-screen bg-gray-50 p-8">
        <Header />
        <main className="w-full pt-8">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default dashboardLayout;
