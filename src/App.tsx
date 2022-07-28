import HeaderComponent from "./components/Header/ts/HeaderComponent"
import GlobalContext from "./components/Context/GlobalContext"

function App() {

  return (
    <GlobalContext>
      <HeaderComponent />
    </GlobalContext>
  )
}

export default App
