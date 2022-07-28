import CartWishHComponent from "./CartWishHComponent";
import LoginHComponent from "./LoginHComponent";
import NavbarHComponent  from "./NavbarHComponent";
import SearchbarHComponent from "./SearchbarHComponent";

import '../css/HeaderComponent.css'

export default function HeaderComponent() {
  return (
    <header className="header__div">
      <div>
        <LoginHComponent /> 
      </div>
      <div className="div__componentsheader">
        <img src="../../.././img/icons/logo_nike.png" alt="nike logo" className="img__logoheader"/>
        <NavbarHComponent />
        <SearchbarHComponent />
        <CartWishHComponent />
      </div>
    </header>
  )
}
