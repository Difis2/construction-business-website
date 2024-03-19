/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Divider, Row } from "antd";
import { Footer } from "antd/es/layout/layout";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const FooterComponent = () => {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    console.log("HIIIIII");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="bg-gray-100">
      <div className="w-full justify-center flex items-center ">
        <Button type="link">
          <MdKeyboardDoubleArrowUp
            onClick={scrollToTop}
            className="button-top"
            color="black"
            style={{
              backgroundColor: "darkgray",
            }}
          />
        </Button>
      </div>

      <Footer style={{ background: "darkgray", borderTop: "4px solid black" }}>
        <Row className="flex w-full justify-center flex-row text-center">
          <Col xs={20} sm={10} md={10} xl={6}>
            <div className="text-lg font-extrabold">
              Robust and Fabulous, Lda
            </div>
            <div className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </Col>
          <Col xs={20} sm={10} md={10} xl={6}>
            <div className="text-lg font-extrabold ">Contactos</div>
            <div className="text-md font-bold ">Telefone</div>
            <div className="">
              +351 961 443 378 <br /> (Chamada para a rede móvel nacional)
            </div>
            <div className="text-md font-bold ">Email</div>
            <div className="">geral.robustfabulous@gmail.com</div>
          </Col>
          <Col xs={20} sm={10} md={10} xl={6}>
            {" "}
            <div className="text-lg font-extrabold ">Localização</div>
            <div className="text-md font-bold ">Lisboa</div>
            <div className="">
              Rua Cesar de Oliveira, Nº 11 <br /> Ranholas <br /> 2710-725
              Sintra
            </div>
          </Col>
          <Col xs={20} sm={10} md={10} xl={6} className="flex-col flex">
            <div className="text-lg font-extrabold ">Menu</div>
            <div className="flex flex-col">
              <a className="text-black" onClick={scrollToTop}>
                Home
              </a>
              <a className="text-black" href="/empresa">
                Empresa
              </a>
              <a className="text-black" href="/obras">
                Obras
              </a>
              <a className="text-black" href="/servicos">
                Serviços
              </a>
              <a className="text-black" href="/localizacao">
                Localização
              </a>
              <a className="text-black" href="/contactos">
                Contactos
              </a>
            </div>
          </Col>
        </Row>
        <Divider />
        <div className="text-center">
          Robust and Fabulous, Lda ©{new Date().getFullYear()} Created by Diogo
          Soares
        </div>{" "}
        {/* <div className="flex w-full justify-center flex-row section_wrapper">
        <div className="footer_col">
          <div className="text-lg font-bold">Robust and Fabulous, Lda</div>
          <div className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
            Rua Cesar de Oliveira, Nº 11 <br /> Ranholas <br /> 2710-725 Sintra
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
      </div> */}
      </Footer>
    </div>
  );
};

export default FooterComponent;
