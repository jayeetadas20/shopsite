import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login_Signup from "./Pages/Login_Signup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import CategoryBannerMen from "./Components/CategoryBanner/CategoryBannerMen";
import CategoryBannerWomen from "./Components/CategoryBanner/CategoryBannerWomen";
import CategoryBannerKids from "./Components/CategoryBanner/CategoryBannerKids";
import ProtectedRoute from "./Pages/ProtectedRoute";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <div className="main_container">
        <BrowserRouter>
          <AuthProvider>
            <Navbar />

            <Routes>
              <Route path="/" element={<Shop />}></Route>
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/men"
                element={
                  <ShopCategory banner={<CategoryBannerMen />} category="men" />
                }
              ></Route>
              <Route
                path="/women"
                element={
                  <ShopCategory
                    banner={<CategoryBannerWomen />}
                    category="women"
                  />
                }
              ></Route>
              <Route
                path="/kid"
                element={
                  <ShopCategory
                    banner={<CategoryBannerKids />}
                    category="kid"
                  />
                }
              ></Route>
              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />}></Route>
              </Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login_Signup />}></Route>
            </Routes>

            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
