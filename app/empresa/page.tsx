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
          <div className="w-full flex flex-col">
            <div className="flex flex-start text-black ml-5 text-2xl font-bold mb-5">
              Quem somos
            </div>
            <div className=" text-black">
              O <b>Robust&Fabulous</b> teve suas origens modestas <b>em 1998</b>
              , quando um grupo de empreendedores apaixonados por arquitetura e
              design se uniu com o objetivo de transformar espaços e tornar
              realidade <b>os sonhos dos nossos clientes</b>. Desde então,{" "}
              <b>Robust&Fabulous </b>
              tem sido sinônimo de excelência em construção e remodelação.
              <br />
              <br />
              Ao longo dos anos, a Empresa ABC tem se destacado por sua
              abordagem centrada no cliente, combinando habilidades técnicas
              sólidas com criatividade e inovação. Seu compromisso com a
              qualidade e a atenção aos detalhes tornaram-na uma escolha
              preferida para uma ampla gama de projetos, desde pequenas reformas
              residenciais até grandes empreendimentos comerciais.
            </div>
          </div>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
}
