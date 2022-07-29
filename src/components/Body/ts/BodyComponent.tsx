import ProductsBComponent from "./ProductsBComponent"
import InfoSectionBComponent from "./InfoSectionBComponent"

import { useContext } from "react"
import { cartContext } from "../../../context/GlobalContext"


function BodyComponent() {

  const { products } = useContext(cartContext)


  return (
    <div className="body__div">
      <InfoSectionBComponent products={products}/>
      <ProductsBComponent />
    </div>
  )
}

export default BodyComponent
