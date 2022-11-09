import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginView from "./components/Login/LoginView";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Api1 from "./components/Container/Api1";
import Api2 from "./components/Container/Api2";
import Api3 from "./components/Container/Api3";
import Api4 from "./components/Container/Api4";
function App() {
  const RouteName = ["Api_1", "Api_2", "Api_3", "Api_4"];
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <HomePage />
            </>
          }
        />

        {RouteName.map((Name, index) => (
          <Route
          key={index}
            path={"/" + Name}
            element={
              <>
                <Navbar />
                {Name === "Api_1" ? (
                  <Api1 />
                ) : Name === "Api_2" ? (
                  <Api2 />
                ) : Name === "Api_3" ? (
                  <Api3 />
                ) : Name === "Api_4" ? (
                  <Api4 />
                ) : null}
              </>
            }
          />
        ))}

        <Route path="/Login" element={<LoginView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
