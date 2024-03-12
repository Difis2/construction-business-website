import { Dropdown, MenuProps, Space } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a rel="noopener noreferrer" href="/obras/ladrilhos">
        Ladrilhos
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a rel="noopener noreferrer" href="/obras/canalizacoes">
        Canalizações
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a rel="noopener noreferrer" href="/obras/remodelacoes">
        Remodelações
      </a>
    ),
  },
];

const NavBar = () => {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburguer-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }
  return (
    <div className="w-full flex justify-center items-center h-48 bg-white nav-border">
      <ul id="desktop-nav" className="flex flex-row gap-10 items-center ">
        <li>
          <img className="w-52 h-40" src="/imgs/logo2.png" alt="Logo"></img>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/empresa">Empresa</a>
        </li>
        <li>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space className="cursor-pointer">Obras</Space>
            </a>
          </Dropdown>
        </li>
        <li>
          <a href="/servicos">Serviços</a>
        </li>
        <li>
          <a href="/localizacao">Localização</a>
        </li>
        <li>
          <a href="/contactos">Contactos</a>
        </li>
      </ul>
      <ul
        id="hamburguer-nav"
        className="flex flex-row gap-10 items-center justify-between w-full px-10 "
      >
        <div>
          <img
            className="w-52 h-40"
            src="/imgs/logo2.png"
            alt="Logo Hamburguer"
          ></img>
        </div>
        <div className="hamburguer-menu">
          <div className="hamburguer-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/empresa">Empresa</a>
            </li>
            <li>
              <Dropdown placement="topLeft" menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="cursor-pointer">Obras</Space>
                </a>
              </Dropdown>
            </li>
            <li>
              <a href="/servicos">Serviços</a>
            </li>
            <li>
              <a href="/localizacao">Localização</a>
            </li>
            <li>
              <a href="/contactos">Contactos</a>
            </li>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
