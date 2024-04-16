import { Outlet } from "react-router-dom";
import HomePage from "./landing/home/page.tsx";

export default function Root() {
  return (
    <div>
      {/* <HomePage /> */}
      <Outlet />
    </div>
  );
}
