import React from "react";
import HeaderOptions from "./HeaderOptions";
import {useDispatch} from "react-redux";
import {logoutUser} from "../../Redux/Slices/authSlice";
import CommonButton from "../../Common/CommonButton";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser(""));
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid h-16 items-center gap-4 px-4 border-b md:grid-cols-[250px_1fr] lg:gap-6 px-6">
        <nav className="hidden items-center gap-2 text-sm font-medium md:flex md:gap-5 lg:gap-6">
          <HeaderOptions name={"Dashboard"} />
          <HeaderOptions name={"Orders"} />
          <HeaderOptions name={"Products"} />
          <HeaderOptions name={"Customers"} />
          <HeaderOptions name={"Marketing"} />
          <CommonButton
            labelClassName="flex items-center justify-between"
            name={"Logout"}
            onClick={handleLogout}
            inputId="register"
            className="text-white py-2 px-4 rounded bg-red-600 hover:bg-red-700 items-end"
          />
        </nav>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-4 md:gap-8 md:p-6">
        <div className="w-full p-4 rounded-lg border md:w-[400px]">
          <div className="flex flex-col items-center gap-2">
            <img
              alt="Avatar"
              className="rounded-full"
              height="96"
              src="/placeholder.svg"
              style={{
                aspectRatio: "96/96",
                objectFit: "cover"
              }}
              width="96"
            />
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                john@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
