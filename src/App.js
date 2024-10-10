import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Allroutes } from "./route/route";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            Allroutes.map((route , i)=> <Route key={i} path={route.path} element={<route.component />}/>)
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
