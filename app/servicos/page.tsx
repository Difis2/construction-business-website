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
                  Acompanhamento de Arquitetura/Projetos Acompanhamento de
                  Arquitetura/Projetos Acompanhamento de Arquitetura/Projetos
                  Acompanhamento de Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de Arquitetura/Projetos
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
                  Acompanhamento de Arquitetura/Projetos Acompanhamento de
                  Arquitetura/Projetos Acompanhamento de Arquitetura/Projetos
                  Acompanhamento de Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de Arquitetura/Projetos
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
                  Acompanhamento de Arquitetura/Projetos Acompanhamento de
                  Arquitetura/Projetos Acompanhamento de Arquitetura/Projetos
                  Acompanhamento de Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de Arquitetura/Projetos
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
                  Acompanhamento de Arquitetura/Projetos Acompanhamento de
                  Arquitetura/Projetos Acompanhamento de Arquitetura/Projetos
                  Acompanhamento de Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de Arquitetura/Projetos
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
                  Acompanhamento de Arquitetura/Projetos Acompanhamento de
                  Arquitetura/Projetos Acompanhamento de Arquitetura/Projetos
                  Acompanhamento de Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de
                  Arquitetura/ProjetosAcompanhamento de Arquitetura/Projetos
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
