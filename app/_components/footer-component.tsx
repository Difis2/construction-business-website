import { Divider } from "antd";
import { Footer } from "antd/es/layout/layout";

const FooterComponent = () => {
  return (
    <Footer style={{ background: "darkgray" }}>
      <div className="flex w-full justify-center flex-row section_wrapper">
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
      </div>
    </Footer>
  );
};

export default FooterComponent;
