import "../../assets/styles/header.scss";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <div className="header__container">
        <h1>
          <a href="/">Leviathon</a>
        </h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;