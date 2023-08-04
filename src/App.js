import { userInputs, productInputs } from "./form_Source"
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import NewPage from "./pages/new_page/New_page"
import SinglePage from "./pages/single_page/Single_page"
import "./style/dark.css"


import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" >
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="products" >
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route path="new" element={<NewPage inputs={productInputs} title="Add new Product" />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
