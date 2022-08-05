import CartWishHComponent from "./CartWishHComponent";
import LoginHComponent from "./LoginHComponent";
import NavbarHComponent from "./NavbarHComponent";
import SearchbarHComponent from "./SearchbarHComponent";

import '../css/HeaderComponent.css'
import SliderHComponent from "./SliderHComponent";
import { Link } from "react-router-dom";


export default function HeaderComponent() {

  return (
    <header className="header__div">
      <div>
        <LoginHComponent />
      </div>
      <div className="div__componentsheader">
        <Link to='/'><img src="../../.././img/icons/logo_nike.png" alt="nike logo" className="img__logoheader" /></Link>
        <NavbarHComponent />
        <SearchbarHComponent />
        <CartWishHComponent />
      </div>
      <div>
        <SliderHComponent />
      </div>
    </header>
  )
}
