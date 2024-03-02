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
  return (
    <div className="w-full flex justify-center items-center h-48 bg-white nav-border">
      <ul className="flex flex-row gap-10 items-center ">
        <li>
          <img className="w-52 h-40" src="/imgs/logo2.png"></img>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Empresa</a>
        </li>
        <li>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>Obras</Space>
            </a>
          </Dropdown>
        </li>
        <li>
          <a href="/services">Serviços</a>
        </li>
        <li>
          <a href="/location">Localização</a>
        </li>
        <li>
          <a href="/contacts">Contactos</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
