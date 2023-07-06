import Home from "./pages/home/Home"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import NewPage from "./pages/new_page/New_page"
import SinglePage from "./pages/single_page/Single_page"

import { Route, Routes, BrowserRouter } from "react-router-dom"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" >
              <Route index element={<List />} />
              <Route path=":userId" element={<SinglePage />} />
              <Route path="new" element={<NewPage />} />
            </Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
