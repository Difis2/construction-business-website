/* eslint-disable @next/next/no-img-element */
"use client";
import NavBar from "./_components/nav-bar";
import {
  Button,
  Card,
  Carousel,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import { BsHouse } from "react-icons/bs";
import TextArea from "antd/es/input/TextArea";
import { Footer } from "antd/es/layout/layout";
import Meta from "antd/es/card/Meta";
import { GiAutoRepair } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import dynamic from "next/dynamic";
import FooterComponent from "./_components/footer-component";

const MyAwesomeMap = dynamic(() => import("./_components/map"), {
  ssr: false,
});

export default function Home() {
  const onFinish = async (values: any) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          phone: values.phone,
          intervension: values.intervension,
          address: values.address,
          value: values.value,
          area: values.area,
          service: values.service,
          initialDate: values.startDate?.$d,
        }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="bg-white h-screen w-full fold-size">
      <NavBar></NavBar>
      <Carousel autoplay autoplaySpeed={1500}>
        <div className="relative">
          <div className="carousel_text">Bem vindo</div>
          <img
            src="/imgs/carousel4.jpeg"
            className="carousel_img"
            alt="Carousel4"
          ></img>
          <button className="carousel_button">Learn More</button>
        </div>

        <div className="relative">
          <div className="carousel_text">Adeus</div>
          <img
            src="/imgs/carousel2.jpg"
            className="carousel_img"
            alt="Carousel2"
          ></img>
          <button className="carousel_button">Explore Now</button>
        </div>

        <div className="relative">
          <div className="carousel_text">Lorem Ipsum</div>
          <img
            src="/imgs/carousel3.jpg"
            className="carousel_img"
            alt="Carousel3"
          ></img>
          <button className="carousel_button">Click Here</button>
        </div>

        <div className="relative">
          <div className="carousel_text">Dolor Sit Amet</div>
          <img
            src="/imgs/carousel1.jpg"
            className="carousel_img"
            alt="Carousel4"
          ></img>
          <button className="carousel_button">Get Started</button>
        </div>
      </Carousel>
      <div id="empresa" className="bg-gray-100 section_container">
        <div className="section_wrapper">
          <div className="w-full flex justify-center items-center text-center about_title">
            Recriando ambientes com inovação e expertise,
            <br /> moldando o futuro do seu espaço.
          </div>
          <div className="flex justify-center w-full items-center mt-16 about_gap">
            <img
              src="/imgs/carousel1.jpg"
              className="about_img"
              alt="Carousel5"
            ></img>
            <div className=" about_gap_text flex flex-col">
              <div className="about_text">
                Na vanguarda das remodelações e construção civil, a nossa
                empresa é reconhecida pela excelência em projetos que
                transformam espaços e superam as expectativas dos nossos
                clientes.
              </div>
              <Button
                href="/empresa"
                className="about_button w-fit"
                color="orange"
              >
                Saber mais...
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-white section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            Algumas das nossas obras!
          </div>
          <div className="mt-20 w-full flex justify-center flex-col gap-10 items-center">
            <Row
              gutter={{ xs: 0, sm: 16, md: 24, lg: 32 }}
              className="flex justify-center"
              style={{ gap: "30px 70px" }}
            >
              <Col xs={20} sm={10} md={10} xl={6}>
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
              <Col xs={20} sm={10} md={10} xl={6}>
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
              <Col xs={20} sm={10} md={10} xl={6}>
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
              <Col xs={20} sm={10} md={10} xl={6}>
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
              <Col xs={20} sm={10} md={10} xl={6}>
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
              <Col xs={20} sm={10} md={10} xl={6}>
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
            <Button href="/obras" className="w-fit" color="orange">
              Ver mais...
            </Button>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-gray-100 section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            Os nossos Serviços!
          </div>
          <div className="mt-20 w-full flex justify-center">
            <Row
              className="flex justify-center items-center"
              style={{ gap: "30px 80px" }}
              gutter={{ xs: 0, sm: 16, md: 6, lg: 32 }}
            >
              <Col xs={32} sm={26} md={8} xl={6}>
                <div className="services_card">
                  <BsHouse size={100} color="black" />
                  <div className="text-center">Moradias Unifamiliares</div>
                </div>
              </Col>
              <Col xs={32} sm={26} md={8} xl={6}>
                <div className="services_card">
                  <GiAutoRepair size={100} color="black" />
                  <div className="text-center">Reparos e Manutenção</div>
                </div>
              </Col>
              <Col xs={32} sm={26} md={8} xl={6}>
                <div className="services_card">
                  <MdOutlineDesignServices size={100} color="black" />
                  <div className="text-center">
                    Acompanhamento de <br />
                    Arquitetura/Projetos
                  </div>
                </div>
              </Col>
              <Col xs={32} sm={26} md={8} xl={6}>
                <div className="services_card">
                  <MdOutlineHomeWork size={100} color="black" />
                  <div className="text-center">Remodelações</div>
                </div>
              </Col>
              <Col xs={32} sm={26} md={8} xl={6}>
                <div className="services_card">
                  <GrUserWorker size={100} color="black" />
                  <div className="text-center">Ladrilhos</div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-white section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            A nossa Localização!
          </div>
          <div className="flex justify-center items-center mt-20 flex-col">
            {/* <MyAwesomeMap></MyAwesomeMap> */}
            <div className="text-black mt-10 font-bold text-xl text-center">
              Rua César de Oliveira 11a, 2710-725 Sintra
            </div>
            <div>
              <div className="text-black text-center">
                Clique{" "}
                <a
                  className=""
                  style={{ color: "blue" }}
                  href="https://maps.app.goo.gl/yDzBe3tDvN1q3fnu8"
                >
                  aqui
                </a>{" "}
                para mais detalhes da localização.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="serviços" className="bg-gray-100 section_container ">
        <div className="section_wrapper">
          <div className="font-black text-black text-4xl text-center">
            Pedir informações!
          </div>

          <div className="mt-20 w-full flex justify-center">
            <Form onFinish={onFinish} layout={"vertical"}>
              <Row className="flex mr-10 ml-10 justify-center" gutter={24}>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="name"
                    label="Nome"
                    rules={[
                      {
                        required: true,
                        message: "Insera um nome!",
                      },
                      {
                        pattern: /^[A-Za-z\s]+$/,
                        message: "Nome não pode conter números!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="email"
                    label="Email"
                    rules={[
                      {
                        required: true,
                        message: "Insera um email válido!",
                        type: "email",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="phone"
                    label="Telefone"
                    rules={[
                      {
                        max: 9,
                        message: "Número ultrapassa os 9 dígitos!",
                      },
                      {
                        pattern: /^[0-9]+$/,
                        message: "Número pode apenas conter dígitos!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="value"
                    label="Valor de investimento"
                    rules={[
                      {
                        required: true,
                        message: "Insera um investimento!",
                      },
                      {
                        pattern: /^[0-9]+$/,
                        message: "Insera apenas um valor numérico!",
                      },
                    ]}
                  >
                    <Input value="number" />
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={22} xl={22}>
                  <Form.Item
                    className="form-label"
                    name="address"
                    label="Morada"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="area"
                    label="Área de intervenção"
                  >
                    <Select>
                      <Select.Option value="até 50m2">até 50m2</Select.Option>
                      <Select.Option value="de 50m2 até 100m2">
                        de 50m2 até 100m2
                      </Select.Option>
                      <Select.Option value="mais de 100m2">
                        mais de 100m2
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="service"
                    label="Tipo de serviço"
                  >
                    <Select>
                      <Select.Option value="Construção">
                        Construção
                      </Select.Option>
                      <Select.Option value="Remodelação">
                        Remodelação
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="intervension"
                    label="Tipo de intervenção"
                  >
                    <Select>
                      <Select.Option value="Construção">
                        Construção Nova
                      </Select.Option>
                      <Select.Option value="Remodelação integral">
                        Remodelação Integral
                      </Select.Option>
                      <Select.Option value="Remodelação parcial">
                        Remodelação Parcial
                      </Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={11} xl={11}>
                  <Form.Item
                    className="form-label"
                    name="startDate"
                    label="Previsão de inicio"
                  >
                    <DatePicker className="w-full" />
                  </Form.Item>
                </Col>
                <Col xs={20} sm={26} md={22} xl={22}>
                  <Form.Item name="message" label="Mensagem">
                    <TextArea rows={4} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item className="text-center">
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  );
}
