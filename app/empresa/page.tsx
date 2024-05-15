"use client";
import { Card, Divider } from "antd";
import FooterComponent from "../_components/footer-component";
import NavBar from "../_components/nav-bar";
import useIntersectionObserver from "../hooks/useIntersitionObserver";

export default function Empresa() {
  const [card1Ref, card1Visible] = useIntersectionObserver({
    threshold: 1,
  });
  const [card2Ref, card2Visible] = useIntersectionObserver({
    threshold: 1,
  });
  const [card3Ref, card3Visible] = useIntersectionObserver({
    threshold: 1,
  });
  return (
    <div className="bg-white h-screen fold-size">
      <NavBar></NavBar>
      <div className="bg-gray-100 section_container">
        <div className="section_wrapper justify-center flex items-center flex-col">
          <h1>Empresa</h1>

          <p>Um pouco sobre nós</p>
          <Divider
            className="divider"
            style={{ width: "10px !important" }}
          ></Divider>
          <div className="w-full flex flex-col">
            <div className="flex flex-start text-black ml-5 text-2xl font-bold mb-5">
              Quem somos
            </div>
            <div className=" text-black about-us-text">
              O <b>Robust&Fabulous</b> teve suas origens modestas <b>em 1998</b>
              , quando um grupo de empreendedores apaixonados por arquitetura e
              design se uniu com o objetivo de transformar espaços e tornar
              realidade <b>os sonhos dos nossos clientes</b>. Desde então,{" "}
              <b>Robust&Fabulous </b>
              tem sido sinônimo de excelência em construção e remodelação.
              <br />
              <br />
              Ao longo dos anos, a <b>Robust&Fabulous</b> tem se destacado por
              sua abordagem centrada no cliente, combinando habilidades técnicas
              sólidas com criatividade e inovação. Seu compromisso com a
              qualidade e a atenção aos detalhes tornaram-na uma escolha
              preferida para uma ampla gama de projetos.
              <br />
              <br />A nossa experiência está orientada para a área de
              <b> ladrilhos</b>, <b>arquitetura</b>,<b> reparos e manutenção</b>{" "}
              e <b>remodelações</b>, sendo a nossa equipa composta por
              profissionais com formação nos mais variados ramos do segmento, o
              que possibilita uma visão multidisciplinar e criatividade na busca
              das melhores soluções.
            </div>
            <div className="flex flex-start text-black ml-5 text-2xl font-bold mb-5 mt-5">
              O que valorizamos
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <Card
                title="Qualidade"
                ref={card1Ref}
                className={`card fade-in-slide ${
                  card1Visible ? "visible" : ""
                }`}
                style={{ width: "100%" }}
              >
                <div className="flex flex-col gap-3">
                  <p className="about-us-text">
                    A <b>Robust&Fabulous</b> pretende satisfazer as
                    necessidades, e sempre que possível, exceder as expectativas
                    dos seus clientes através:
                  </p>
                  <p className="about-us-text">
                    • De uma <b>qualidade de materiais</b> (que permita atender
                    às necessidades do cliente, proporcionando a melhor
                    qualidade possível);
                  </p>
                  <p className="about-us-text">
                    • De um <b>preço competitivo</b> (que permita gerar lucros a
                    todas as partes interessadas);
                  </p>
                  <p className="about-us-text">
                    • De uma <b>precisão nos projetos</b> (que permite garantir
                    que os projetos e desenhos sejam precisos e detalhados);
                  </p>
                  <p className="about-us-text">
                    • De um uso de <b>métodos de construção</b> (que permite
                    garantir a durabilidade e a integridade estrutural);
                  </p>
                </div>
              </Card>
              <Card
                title="Segurança"
                ref={card2Ref}
                className={`card fade-in-slide ${
                  card2Visible ? "visible" : ""
                }`}
                style={{ width: "100%" }}
              >
                <div className="flex flex-col gap-3">
                  <p className="about-us-text">
                    A <b>Robust&Fabulous</b> pretende assegurar e promover a
                    segurança e a saúde dos seus trabalhadores através:
                  </p>
                  <p className="about-us-text">
                    • De <b>políticas de segurança</b> (desenvolver e
                    implementar políticas de segurança clara e abrangentes);
                  </p>
                  <p className="about-us-text">
                    • De <b>atualizações contínuas</b> (que permite manter os
                    funcionários atualizados sobre novos procedimentos e
                    equipamentos);
                  </p>
                  <p className="about-us-text">
                    • De <b>equipamentos de proteção</b> (que permite a proteção
                    individual e coletiva dos funcionários );
                  </p>
                  <p className="about-us-text">
                    • De <b>procedimentos de segurança</b> (que permite prevenir
                    acidentes);
                  </p>
                </div>
              </Card>
              <Card
                title=" Eficiência Operacional"
                ref={card3Ref}
                className={`card fade-in-slide ${
                  card3Visible ? "visible" : ""
                }`}
                style={{ width: "100%" }}
              >
                <div className="flex flex-col gap-3">
                  <p className="about-us-text">
                    A <b>Robust&Fabulous</b> pretende uma eficácia e eficiência
                    operacional através :
                  </p>
                  <p className="about-us-text">
                    • De <b>controle de custos</b> (elaboração de orçamentos
                    precisos e realistas para evitar custos inesperados);
                  </p>
                  <p className="about-us-text">
                    • De <b>planeamento detalhado</b> (criação de um plano de
                    projeto detalhado que inclua cronogramas, orçamento,
                    recursos e metas);
                  </p>
                  <p className="about-us-text">
                    • De <b>gestão de recursos</b> (que permite a gestão
                    eficiente dos recursos humanos, materiais e equipamentos.);
                  </p>
                  <p className="about-us-text">
                    • De <b>logística e gestão de suprimentos</b> (que permite a
                    manutenção de uma cadeia de suprimentos eficaz para garantir
                    a disponibilidade de materiais quando necessário);
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  );
}
