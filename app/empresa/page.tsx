"use client";
import { Divider } from "antd";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";

export default function Empresa() {
  return (
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="section_wrapper justify-center flex items-center flex-col">
          <h1>Empresa</h1>

          <p>Um pouco sobre nós</p>
          <Divider
            className="divider"
            style={{ width: "10px !important" }}
          ></Divider>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
}
