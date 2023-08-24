import { userInputs, productInputs } from "./form_Source"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import NewPage from "./pages/new_page/New_page"
import SinglePage from "./pages/single_page/Single_page"
import "./style/dark.css"
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";


import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"
function App() {
  const { Current_User } = useContext(AuthContext);

  function RequiredAuth({ children }) {
    return Current_User ? children : <Navigate to="/login" />
  }
  console.log(Current_User);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/login" element={<Login />} />
            <Route index element={<RequiredAuth><Home /></RequiredAuth>} />

            <Route path="/user" >
              <Route index element={<RequiredAuth><List /></RequiredAuth>} />
              <Route path=":userId" element={<RequiredAuth><SinglePage /></RequiredAuth>} />
              <Route path="new" element={<RequiredAuth><NewPage inputs={userInputs} title="Add New User" /></RequiredAuth>} />
            </Route>
            <Route path="products" >
              <Route index element={<RequiredAuth><List /></RequiredAuth>} />
              <Route path=":productId" element={<RequiredAuth><SinglePage /></RequiredAuth>} />
              <Route path="new" element={<RequiredAuth><NewPage inputs={productInputs} title="Add new Product" /></RequiredAuth>} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
