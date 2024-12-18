import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import PaginaPadrao from "./Paginas/PaginaPadrao";
import Home from "./Paginas/Home";
import Destination from "./Paginas/Destination";
import Crew from "./Paginas/Crew";
import Technology from "./Paginas/Technology";

function AppRoutes() {
  return (
        <BrowserRouter>
          <Routes>
              <Route path="/" element={ <PaginaPadrao/> }>
                <Route index element={ <Home/> } />
                <Route path="/destinations" element={<Destination/> } />
                <Route path="/crew" element={ <Crew/> } />
                <Route path="/technology" element={ <Technology/> } />
              </Route>
            </Routes>
        </BrowserRouter>
  );
}

export default AppRoutes;
