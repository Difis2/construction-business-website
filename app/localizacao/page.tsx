"use client";
import { Divider } from "antd";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";
import dynamic from "next/dynamic";

const MyAwesomeMap = dynamic(() => import("../_components/map"), {
  ssr: false,
});

export default function Localizacao() {
  return (
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="section_wrapper justify-center flex items-center flex-col">
          <div className="flex flex-col justify-center items-center ">
            <h1>Localização</h1>

            <p>A nossa sede</p>
            <Divider
              className="divider"
              style={{ width: "10px !important" }}
            ></Divider>
          </div>
          <div className="flex justify-center items-center mt-20 flex-col w-9/12">
            <MyAwesomeMap></MyAwesomeMap>
            <div className="text-black mt-10 font-bold text-xl text-center">
              Rua César de Oliveira 11a, 2710-725 Sintra
            </div>
            <div>
              <div className="text-black text-center">
                Clique{" "}
                <a
                  className=""
                  style={{ color: "blue" }}
                  href="https://maps.app.goo.gl/yDzBe3tDvN1q3fnu8"
                >
                  aqui
                </a>{" "}
                para mais detalhes da localização.
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
}
