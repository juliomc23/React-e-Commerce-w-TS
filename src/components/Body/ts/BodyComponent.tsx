import ProductsBComponent from "./ProductsBComponent"
import InfoSectionBComponent from "./InfoSectionBComponent"
import FilterBComponent from "./FilterBComponent"

import { useContext } from "react"
import { globalContext } from "../../../context/GlobalContext"

import '../css/BodyComponent.css'

function BodyComponent() {

  const { products } = useContext(globalContext)

  return (
    <div className="body__div">
      <InfoSectionBComponent products={products} />
      <section className="productsfilter__midsectionb">
        <FilterBComponent />
        <ProductsBComponent />
      </section>
    </div>
  )
}

export default BodyComponent
