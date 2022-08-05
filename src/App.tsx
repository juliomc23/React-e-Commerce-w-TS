import BodyComponent from "./components/Body/ts/BodyComponent"
import FooterComponent from "./components/Footer/ts/FooterComponent"
import HeaderComponent from "./components/Header/ts/HeaderComponent"
import GlobalContext from "./context/GlobalContext"

import Router from '../Router.jsx'

function App() {

  return (
    <GlobalContext>
      <HeaderComponent />
      <Router />
      <FooterComponent />
    </GlobalContext>
  )
}

export default App
