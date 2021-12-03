import logo from "./logo.svg";
import "./App.css";
import { ShopItem } from "./components/ShopItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Storefront } from "./pages/Storefront";
import { Product } from "./pages/Product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Storefront />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="*" element={<h1>Error 404 Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
