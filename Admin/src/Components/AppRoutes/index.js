import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";
import Products from "../../Pages/Products";
import Orders from "../../Pages/Orders";
import Customers from "../../Pages/Customers";
import Complaints from "../../Pages/Complaints";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
      <Route path="/complaints" element={<Complaints />}></Route>
    </Routes>
  );
}
export default AppRoutes;
