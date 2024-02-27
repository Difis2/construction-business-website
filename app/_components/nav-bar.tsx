const NavBar = () => {
  return (
    <div className="w-full flex justify-center items-center h-32">
      <ul className="flex flex-row gap-10 items-center">
        <li>
          <img src="favicon.ico"></img>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Empresa</a>
        </li>
        <li>
          <a href="/obras">Obras</a>
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
