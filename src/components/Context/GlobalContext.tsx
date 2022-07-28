import React, {createContext, ReactElement, useState} from 'react'

export const Context = createContext({})

interface props {
    children: JSX.Element | JSX.Element[] //si alguna vez queremos pasar por props una funcion tenemos que decirle aqui lo que recibiriamos ya que solo estamos recibiendo jsx.element
}

function GlobalContext({children}:props) {

    const [counter, setCounter] = useState(0)
  return (
    <Context.Provider value={{counter, setCounter}}>
        {children}
    </Context.Provider>
  )
}

export default GlobalContext