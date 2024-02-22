import { Link } from "react-router-dom";
import "../../assets/styles/header.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h1>
          <Link to="">Leviathon</Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;