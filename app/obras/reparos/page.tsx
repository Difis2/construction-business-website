"use client";
import FooterComponent from "@/app/_components/footer-component";
import NavBar from "@/app/_components/nav-bar";
import { Card, Col, Divider, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function Reparos() {
  return (
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="flex flex-col justify-center items-center section_wrapper">
          <h1 className="section-head-text">Reparos e manutenções</h1>
          <Divider
            className="divider"
            style={{ width: "10px !important" }}
          ></Divider>
          <div className="mt-20 w-full flex justify-center flex-col gap-10 items-center">
            <Row className="flex justify-center" style={{ gap: "30px 70px" }}>
              <Col xs={20} sm={10} md={10} xl={6}>
                <Card
                  hoverable
                  cover={
                    <Image.PreviewGroup
                      preview={{
                        onChange: (current, prev) =>
                          console.log(
                            `current index: ${current}, prev index: ${prev}`
                          ),
                      }}
                    >
                      <Image
                        className="w-full h-full object-cover"
                        src="/imgs/reparos/obra1/obra1-1.jpeg"
                        style={{ maxHeight: "350px" }}
                        alt="imagem 1"
                      />
                      <Image
                        style={{ display: "none" }}
                        src="/imgs/reparos/obra1/obra1-2.jpeg"
                        alt="imagem 2"
                      />
                    </Image.PreviewGroup>
                  }
                >
                  <Meta className="" title="Sintra" description="10/2023" />
                </Card>
              </Col>

              <Col xs={20} sm={10} md={10} xl={6}>
                <Card
                  hoverable
                  cover={
                    <Image.PreviewGroup
                      preview={{
                        onChange: (current, prev) =>
                          console.log(
                            `current index: ${current}, prev index: ${prev}`
                          ),
                      }}
                    >
                      <Image
                        className="w-full h-full object-cover"
                        src="/imgs/reparos/obra2/obra2-1.jpeg"
                        style={{ maxHeight: "350px" }}
                        alt="imagem 1"
                      />
                    </Image.PreviewGroup>
                  }
                >
                  <Meta className="" title="Sintra" description="10/2023" />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  hoverable
                  cover={<img src="/imgs/carousel1.jpg" alt="Carousel5"></img>}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
