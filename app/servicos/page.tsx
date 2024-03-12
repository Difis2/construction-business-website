"use client";
import { Col, Row } from "antd";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";
import { BsHouse } from "react-icons/bs";

export default function Servicos() {
  return (
    <div className="bg-white h-screen">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="w-full justify-center flex flex-col items-center gap-20">
          <Row
            gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
            className="flex justify-center"
          >
            <Col span={12}>
              <img src="/imgs/carousel1.jpg" alt="Carousel5"></img>
            </Col>
            <Col span={12} className="w-full">
              <div className="flex justify-start items-start flex-col gap-3">
                <div className="services-icon">
                  <BsHouse size={30} color="black" />
                </div>
                <div className="services-header">Moradias Unifamiliares</div>
              </div>
            </Col>
          </Row>
          <Row
            gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
            className="flex justify-center "
          >
            <Col span={12} className="w-full">
              <div className="flex justify-start items-start flex-col gap-3">
                <div className="services-icon">
                  <BsHouse size={30} color="black" />
                </div>
                <div className="services-header">Reparos e manutenções</div>
              </div>
            </Col>
            <Col span={12}>
              <img src="/imgs/carousel1.jpg" alt="Carousel5"></img>
            </Col>
          </Row>
          <Row className="flex justify-center ">
            <Col span={9}>
              <img src="/imgs/carousel1.jpg" alt="Carousel5"></img>
            </Col>
            <Col span={9} className="w-full">
              <div className="flex justify-start items-start flex-col gap-3">
                <div className="services-icon">
                  <BsHouse size={30} color="black" />
                </div>
                <div className="services-header">
                  Acompanhamento de Arquitetura/Projetos
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
          <Row
            gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
            className="flex justify-center "
          >
            <Col span={12} className="w-full">
              <div className="flex justify-start items-start flex-col gap-3">
                <div className="services-icon">
                  <BsHouse size={30} color="black" />
                </div>
                <div className="services-header">Remodelações</div>
              </div>
            </Col>
            <Col span={12}>
              <img src="/imgs/carousel1.jpg" alt="Carousel5"></img>
            </Col>
          </Row>
          <Row
            gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
            className="flex justify-center "
          >
            <Col span={12}>
              <img src="/imgs/carousel1.jpg" alt="Carousel5"></img>
            </Col>
            <Col span={12} className="w-full">
              <div className="flex justify-start items-start flex-col gap-3">
                <div className="services-icon">
                  <BsHouse size={30} color="black" />
                </div>
                <div className="services-header">Ladrilhos</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
