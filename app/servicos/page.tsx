"use client";
import { Col, Divider, Row } from "antd";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";
import { BsHouse } from "react-icons/bs";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineDesignServices, MdOutlineHomeWork } from "react-icons/md";

export default function Servicos() {
  return (
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="section_wrapper justify-center flex items-center flex-col">
          <h1>Serviços</h1>

          <p>Os nossos Serviços</p>
          <Divider
            className="divider"
            style={{ width: "10px !important" }}
          ></Divider>
          <Row
            className="flex justify-center items-center mt-10"
            style={{ gap: "60px 80px" }}
          >
            <Col xs={32} sm={26} md={8} xl={6}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <BsHouse size={70} color="red" />
                  <div className="services-header">Moradias Unifamiliares</div>
                  <Divider
                    className="divider"
                    style={{ width: "10px !important" }}
                  ></Divider>
                </div>
                <div className="services-text">
                  Proporcionar conforto, funcionalidade e segurança, criando um
                  ambiente acolhedor e personalizado para os residentes
                  desfrutarem de sua vida doméstica.
                </div>
              </div>
            </Col>
            <Col xs={32} sm={26} md={8} xl={6}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <GiAutoRepair size={70} color="red" />
                  <div className="services-header">Reparos e manutenções</div>
                  <Divider
                    className="divider"
                    style={{ width: "10px !important" }}
                  ></Divider>
                </div>
                <div className="services-text">
                  Corrigir problemas existentes e prevenir a ocorrência de
                  novos, garantindo o bom funcionamento e a segurança dos
                  espaços e equipamentos.
                </div>
              </div>
            </Col>
            <Col xs={32} sm={26} md={8} xl={6}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <MdOutlineDesignServices size={70} color="red" />
                  <div className="services-header">
                    Acompanhamento de Arquitetura/Projetos
                  </div>
                  <Divider
                    className="divider"
                    style={{ width: "10px !important" }}
                  ></Divider>
                </div>
                <div className="services-text">
                  Parte fundamental do processo de construção civil. Envolve a
                  supervisão e a coordenação das diferentes etapas do projeto
                  arquitetônico, desde a concepção até a conclusão da
                  construção.
                </div>
              </div>
            </Col>
            <Col xs={32} sm={26} md={8} xl={6}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <MdOutlineHomeWork size={70} color="red" />
                  <div className="services-header">Remodelações</div>
                  <Divider
                    className="divider"
                    style={{ width: "10px !important" }}
                  ></Divider>
                </div>
                <div className="services-text">
                  Atualizações estéticas, como pintura, revestimentos e
                  decoração, bem como alterações estruturais, como a
                  reconfiguração de espaços internos, a adição de novos
                  ambientes, a substituição de sistemas e a modernização de
                  instalações.
                </div>
              </div>
            </Col>
            <Col xs={32} sm={26} md={8} xl={6}>
              <div className="flex flex-col justify-center">
                <div className="flex flex-col justify-center items-center gap-2">
                  <BsHouse size={70} color="red" />
                  <div className="services-header">Ladrilhos</div>
                  <Divider
                    className="divider"
                    style={{ width: "10px !important" }}
                  ></Divider>
                </div>
                <div className="services-text">
                  A nossa especialidade! Variedade de opções de materiais, cores
                  e padrões, e oferece serviços de instalação de alta qualidade
                  para garantir resultados impressionantes.
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
