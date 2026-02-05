import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <NavLink to={"/"}>EduShop</NavLink>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/aboutus"}>About Us</NavLink>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;