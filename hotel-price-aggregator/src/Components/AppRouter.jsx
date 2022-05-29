import React from "react";
import Map from "../pages/Map";
import ProductItem from "./ProductItem";
import { Route, Routes, Navigate } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/hotels" element={<ProductItem />} />
        <Route path="/map" element={<Map />} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
