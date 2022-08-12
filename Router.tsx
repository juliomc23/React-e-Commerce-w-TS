import React from 'react'

import { Routes, Route } from "react-router-dom";
import SingleProductBComponent from './src/components/Body/ts/SingleProductBComponent';
import BodyComponent from "./src/components/Body/ts/BodyComponent"
import { CartBComponent } from './src/components/Body/ts/CartBComponent';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<BodyComponent />} />
      <Route path='/cart' element={<CartBComponent />} />
      <Route path='/product/:id' element={< SingleProductBComponent />} />
      <Route path='*' element={<div>404 Not Found</div>} />
    </Routes>
  )
}

export default Router