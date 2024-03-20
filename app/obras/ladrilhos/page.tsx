"use client";
import FooterComponent from "@/app/_components/footer-component";
import NavBar from "@/app/_components/nav-bar";
import { Card, Col, Divider, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function Ladrilhos() {
  return (
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="flex flex-col justify-center items-center section_wrapper">
          <h1>Ladrinhos</h1>

          <p>A nossa especialidade</p>
          <Divider
            className="divider"
            style={{ width: "10px !important" }}
          ></Divider>
        </div>
        <div className="mt-20 w-full flex justify-center flex-col gap-10 items-center">
          <Row className="flex justify-center" style={{ gap: "30px 70px" }}>
            <Col span={6}>
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
                      src="/imgs/ladrilhos/obra1/obra1-1.jpeg"
                      style={{ maxHeight: "350px" }}
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra1/obra1-2.jpeg"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra1/obra1-3.jpeg"
                      style={{ display: "none" }}
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra1/obra1-4.jpeg"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra1/obra1-5.jpeg"
                      style={{ display: "none" }}
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra1/obra1-6.jpeg"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra1/obra1-7.jpeg"
                      style={{ display: "none" }}
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
      <FooterComponent></FooterComponent>
    </div>
  );
}
