import BodyComponent from "./components/Body/ts/BodyComponent"
import HeaderComponent from "./components/Header/ts/HeaderComponent"
import CartContext from "./context/GlobalContext"

function App() {

  return (
    <CartContext>
      <HeaderComponent />
      <BodyComponent />
    </CartContext>
  )
}

export default App
