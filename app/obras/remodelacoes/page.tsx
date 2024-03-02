"use client";
import NavBar from "@/app/_components/nav-bar";
import { Card, Col, Image, Row } from "antd";
import Meta from "antd/es/card/Meta";

export default function Ladrilhos() {
  return (
    <div className="bg-white h-screen">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="flex flex-col items-center">
          <h1>Remodelações</h1>
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
                      src="/imgs/carousel1.jpg"
                    />
                    <Image
                      style={{ display: "none" }}
                      src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                  </Image.PreviewGroup>
                }
              >
                <Meta
                  className=""
                  title="Canalização Ranholas, Sintra"
                  description="10/2023"
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
  );
}
