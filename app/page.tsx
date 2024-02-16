/* eslint-disable @next/next/no-img-element */
import NavBar from "./_components/nav-bar";
import { Card, Carousel, Col, Row } from "antd";
import { BsHouse } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-white h-screen overflow-auto">
      <NavBar></NavBar>
      <Carousel>
        <div className="relative">
          <div className="carousel_text_1">Bem vindo</div>
          <img
            src="/imgs/carousel1.jpg"
            className="carousel_img"
            alt="Carousel1"
          ></img>
          <button className="carousel_button"></button>
        </div>
        <div className="relative">
          <div className="carousel_text_1">Adeus</div>
          <img
            src="/imgs/carousel2.jpg"
            className="carousel_img"
            alt="Carousel2"
          ></img>
          <button className="carousel_button"></button>
        </div>
        <div>
          <img
            src="/imgs/carousel3.jpg"
            className="carousel_img"
            alt="Carousel3"
          ></img>
          <button className="carousel_button"></button>
        </div>
        <div>
          <img
            src="/imgs/carousel1.jpg"
            className="carousel_img"
            alt="Carousel4"
          ></img>
          <button className="carousel_button"></button>
        </div>
      </Carousel>
      <div id="empresa" className="bg-gray-100 section_container">
        <div className="section_wrapper about_img text-black text-4xl flex justify-center items-center pb-20 text-center">
          Recriando ambientes com inovação e expertise,
          <br /> moldando o futuro do seu espaço.
        </div>
        <div className="section_wrapper flex justify-center items-center mt-16 pr-8 pl-8 gap-20">
          <img
            src="/imgs/carousel1.jpg"
            className="carousel_img"
            alt="Carousel5"
          ></img>
          <div className=" gap-10 flex flex-col">
            <div className="font-black text-black text-4xl">
              Olá aqui vamos meter o que define a empresa!
            </div>
            <button className="bg-black"> Hi There</button>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-white section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            Algumas das nossas obras!
          </div>
          <div className="mt-20 w-full flex justify-content-center">
            <Row className="flex" style={{ gap: "10px 125px" }}>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>

              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
              <Col xs={{ span: 5 }} lg={{ span: 4 }}>
                <Card
                  hoverable
                  style={{ width: 300, height: 250 }}
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                ></Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-gray-100 section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            Os nossos Serviços!
          </div>
          <div className="mt-20 w-full flex justify-content-center">
            <div className="services_card">
              <BsHouse size={100} color="black" />
              <div>Moradias Unifamiliares</div>
            </div>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-gray-100 section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            A nossa Localização!
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-gray-100 section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            Pedir informações!
          </div>
        </div>
      </div>
    </div>
  );
}
