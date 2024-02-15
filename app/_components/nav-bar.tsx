const NavBar = () => {
  return (
    <div className="w-full flex justify-center items-center h-20">
      <ul className="flex flex-row gap-10">
        <li>
          <img src="favicon.ico"></img>
        </li>
        <li>Home</li>
        <li>Empresa</li>
        <li>Serviços</li>
        <li>Obras</li>
        <li>Localização</li>
        <li>Contactos</li>
      </ul>
    </div>
  );
};

export default NavBar;