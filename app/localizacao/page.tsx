"use client";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";

export default function Localizacao() {
  return (
    <div className="bg-white h-screen">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container"></div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
