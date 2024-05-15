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
                      src="/imgs/ladrilhos/obra1/obra1-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra1/obra1-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra1/obra1-3.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra1/obra1-4.jpeg"
                      alt="imagem 4"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra1/obra1-5.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 5"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra1/obra1-6.jpeg"
                      alt="imagem 6"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra1/obra1-7.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 7"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
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
                      src="/imgs/ladrilhos/obra2/obra2-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra2/obra2-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra2/obra2-3.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra2/obra2-4.jpeg"
                      alt="imagem 4"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra2/obra2-5.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 5"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
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
                      src="/imgs/ladrilhos/obra3/obra3-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra3/obra3-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra3/obra3-3.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra3/obra3-4.jpeg"
                      alt="imagem 4"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
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
                      src="/imgs/ladrilhos/obra4/obra4-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra4/obra4-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/ladrilhos/obra4/obra4-3.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra4/obra4-4.jpeg"
                      alt="imagem 4"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
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
                      src="/imgs/ladrilhos/obra5/obra5-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra5/obra5-2.jpeg"
                      alt="imagem 2"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
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
                      src="/imgs/ladrilhos/obra6/obra6-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra6/obra6-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/ladrilhos/obra6/obra6-3.jpeg"
                      alt="imagem 2"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
            </Col>
          </Row>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
