import { Route, Routes } from "react-router-dom";
import { PublicPages } from "../pages/routes/PublicPages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<PublicPages />} />
      </Routes>
    </>
  );
};
