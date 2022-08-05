import React from 'react'

import {Routes,Route} from "react-router-dom";
import SingleProductBComponent from './src/components/Body/ts/SingleProductBComponent';
import BodyComponent from "./src/components/Body/ts/BodyComponent"

function Router() {
  return (
    <Routes>
      <Route path='/' element={<BodyComponent/>}/>
      <Route path='/product/:id' element={< SingleProductBComponent/>} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default Router