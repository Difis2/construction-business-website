"use client";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
} from "antd";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";
import TextArea from "antd/es/input/TextArea";

export default function Contactos() {
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
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="section_wrapper justify-center flex items-center flex-col">
          <h1>Contactos</h1>

          <p className="text-center">Contacto-nos ou peça um orçamento</p>
          <Divider
            className="divider"
            style={{ width: "10px !important" }}
          ></Divider>
        </div>
        <Row className="flex flex-row mt-10 justify-center gap-20">
          <Col
            xs={20}
            sm={10}
            md={10}
            xl={10}
            className="text-black text-center w-full"
          >
            <div className=" text-2xl font-bold ">Telefone</div>
            <div className=" text-lg mt-3">
              +351 961 443 378 <br /> (Chamada para a rede móvel nacional)
            </div>
          </Col>
          <Col
            xs={20}
            sm={10}
            md={10}
            xl={10}
            className="text-black text-md text-center w-full"
          >
            <div className="text-2xl font-bold ">Email</div>
            <div className="text-lg shrink-email mt-3">
              geral.robustfabulous@gmail.com
            </div>
          </Col>
        </Row>
        <div className="w-full text-center text-black mt-10 text-2xl">
          Ou peça um orçamento preenchendo o formulário!
        </div>
        <div className="mt-10 w-full flex justify-center">
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
                <Form.Item className="form-label" name="address" label="Morada">
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
                    <Select.Option value="Construção">Construção</Select.Option>
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

      <FooterComponent></FooterComponent>
    </div>
  );
}
