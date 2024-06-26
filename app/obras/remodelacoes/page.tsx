"use client";
import NavBar from "@/app/_components/nav-bar";
import { Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function Remodelacoes() {
  return (
    <div className="bg-white h-screen">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="flex flex-col items-center">
          <h1 className="section-head-text">Remodelações</h1>
        </div>
        <div className="mt-20 w-full flex justify-center flex-col gap-10 items-center">
          <Row className="flex justify-center" style={{ gap: "30px 70px" }}>
            <Col xs={20} sm={10} md={10} xl={6}>
              <Card
                hoverable
                cover={
                  <Image.PreviewGroup>
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra1/obra1-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra1/obra1-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra1/obra1-3.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
            </Col>
            <Col xs={20} sm={10} md={10} xl={6}>
              <Card
                hoverable
                cover={
                  <Image.PreviewGroup>
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra2/obra2-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra2/obra2-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra2/obra2-3.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra2/obra2-4.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra2/obra2-5.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra2/obra2-6.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra2/obra2-7.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra2/obra2-8.jpeg"
                      style={{ display: "none" }}
                      alt="imagem 3"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
            </Col>
            <Col xs={20} sm={10} md={10} xl={6}>
              <Card
                hoverable
                cover={
                  <Image.PreviewGroup>
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra3/obra3-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra3/obra3-2.jpeg"
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
                  <Image.PreviewGroup>
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra4/obra4-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-3.jpeg"
                      alt="imagem 3"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-4.jpeg"
                      alt="imagem 4"
                    />{" "}
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-5.jpeg"
                      alt="imagem 5"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-6.jpeg"
                      alt="imagem 6"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-7.jpeg"
                      alt="imagem 7"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-8.jpeg"
                      alt="imagem 8"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-9.jpeg"
                      alt="imagem 9"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-10.jpeg"
                      alt="imagem 10"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-11.jpeg"
                      alt="imagem 11"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra4/obra4-12.jpeg"
                      alt="imagem 12"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
            </Col>
            <Col xs={20} sm={10} md={10} xl={6}>
              <Card
                hoverable
                cover={
                  <Image.PreviewGroup>
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra5/obra5-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra5/obra5-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra5/obra5-3.jpeg"
                      alt="imagem 3"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
            </Col>
            <Col xs={20} sm={10} md={10} xl={6}>
              <Card
                hoverable
                cover={
                  <Image.PreviewGroup>
                    <Image
                      className="w-full h-full object-cover"
                      src="/imgs/remodelacoes/obra6/obra6-1.jpeg"
                      style={{ maxHeight: "200px" }}
                      alt="imagem 1"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra6/obra6-2.jpeg"
                      alt="imagem 2"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="/imgs/remodelacoes/obra6/obra6-3.jpeg"
                      alt="imagem 3"
                    />
                  </Image.PreviewGroup>
                }
              ></Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
