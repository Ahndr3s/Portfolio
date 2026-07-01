import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../shared/Navbar";
import { Home } from "../Home";
import { Work } from "../Work";
import { About } from "../About";
import { Contact } from "../Contact";

export const PublicPages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        <Route path="/" element={<Navigate to={"home"} />} />
      </Routes>
    </>
  );
};
