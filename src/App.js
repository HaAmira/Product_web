import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Product from "./pages/products/Products"
import CheckPage from "./pages/checkpage/CheckPage";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.css"
import { useContext} from "react";
import { DarkModeContext } from "./mode/darkModeContext";


function App() {
  const{darkMode} = useContext(DarkModeContext);
  console.log(darkMode);
  return (
    <>
      <div className={darkMode?"app dark":"app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<Login inputs={userInputs} title="User Sign In" />} />
              <Route path="user">
                <Route index element={<List />} />
                <Route path=":userId" element={<CheckPage />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>
              <Route path="products">
                <Route index element={<Product />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
