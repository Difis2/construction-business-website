import NavBar from "./_components/nav-bar";
import { Carousel } from "antd";
export default function Home() {
  return (
    <div className="bg-white h-full">
      <NavBar></NavBar>
      <Carousel>
        <div className="relative">
          <div className="carousel_text_1">Bem vindo</div>
          <img src="/imgs/carousel1.jpg" className="carousel_img"></img>
        </div>
        <div className="relative">
          <div className="carousel_text_1">Adeus</div>
          <img src="/imgs/carousel2.jpg" className="carousel_img"></img>
        </div>
        <div>
          <img src="/imgs/carousel3.jpg" className="carousel_img"></img>
        </div>
        <div>
          <img src="/imgs/carousel1.jpg" className="carousel_img"></img>
        </div>
      </Carousel>
    </div>
  );
}
