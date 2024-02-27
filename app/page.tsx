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
import { Image } from "antd";

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
    <div className="bg-white h-screen overflow-auto">
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
          <div className="w-full text-black text-4xl flex justify-center items-center text-center">
            Recriando ambientes com inovação e expertise,
            <br /> moldando o futuro do seu espaço.
          </div>
          <div className="flex justify-center w-full items-center mt-16 pr-8 pl-8 gap-20">
            <img
              src="/imgs/carousel1.jpg"
              className="about_img"
              alt="Carousel5"
            ></img>
            <div className=" gap-10 flex flex-col">
              <div className="text-black text-xl">
                Na vanguarda das remodelações e construção civil, a nossa
                empresa é reconhecida pela excelência em projetos que
                transformam espaços e superam as expectativas dos nossos
                clientes.
              </div>
              <Button href="/empresa" className="w-fit" color="orange">
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
            <Row className="flex justify-center" style={{ gap: "30px 80px" }}>
              <Col span={6}>
                <div className="services_card">
                  <BsHouse size={100} color="black" />
                  <div className="text-center">Moradias Unifamiliares</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="services_card">
                  <GiAutoRepair size={100} color="black" />
                  <div className="text-center">Reparos e Manutenção</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="services_card">
                  <MdOutlineDesignServices size={100} color="black" />
                  <div className="text-center">
                    Acompanhamento de <br />
                    Arquitetura/Projetos
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className="services_card">
                  <MdOutlineHomeWork size={100} color="black" />
                  <div className="text-center">Remodelações</div>
                </div>
              </Col>
              <Col span={6}>
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
            <MyAwesomeMap></MyAwesomeMap>
            <div className="text-black mt-10 font-bold text-xl">
              Rua César de Oliveira 11a, 2710-725 Sintra
            </div>
            <div>
              <div className="text-black">
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
                <Col span={11}>
                  <Form.Item
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
                <Col span={11}>
                  <Form.Item
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
                <Col span={11}>
                  <Form.Item
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
                <Col span={11}>
                  <Form.Item
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
                <Col span={22}>
                  <Form.Item name="address" label="Morada">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={11}>
                  <Form.Item name="area" label="Área de intervenção">
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
                <Col span={11}>
                  <Form.Item name="service" label="Tipo de serviço">
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
                <Col span={11}>
                  <Form.Item name="intervension" label="Tipo de intervenção">
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
                <Col span={11}>
                  <Form.Item name="startDate" label="Previsão de inicio">
                    <DatePicker className="w-full" />
                  </Form.Item>
                </Col>
                <Col span={22}>
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
      <Footer style={{ background: "darkgray" }}>
        <div className="flex w-full justify-center flex-row section_wrapper">
          <div className="footer_col">
            <div className="text-lg font-bold">Robust and Fabulous, Lda</div>
            <div className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <div className="footer_col">
            <div className="text-lg font-bold">Contactos</div>
            <div className="text-md font-semibold">Telefone</div>
            <div className="">
              +351 961 443 378 <br /> (Chamada para a rede móvel nacional)
            </div>
            <div className="text-md font-semibold">Email</div>
            <div className="">geral.robustfabulous@gmail.com</div>
          </div>
          <div className="footer_col">
            <div className="text-lg font-bold">Localização</div>
            <div className="text-md font-semibold">Lisboa</div>
            <div className="">
              Rua Cesar de Oliveira, Nº 11 <br /> Ranholas <br /> 2710-725
              Sintra
            </div>
          </div>
          <div className="footer_col">
            <div className="text-lg font-bold">Menu</div>
            <a className="text-black" href="/">
              Home
            </a>
            <a className="text-black" href="/empresa">
              Empresa
            </a>
            <a className="text-black" href="/servicos">
              Obras
            </a>
            <a className="text-black" href="/obras">
              Serviços
            </a>
            <a className="text-black" href="/localizacao">
              Localização
            </a>
            <a className="text-black" href="/contactos">
              Contactos
            </a>
          </div>
        </div>
        <Divider />
        <div className="text-center">
          Robust and Fabulous, Lda ©{new Date().getFullYear()} Created by Diogo
          Soares
        </div>
      </Footer>
    </div>
  );
}
