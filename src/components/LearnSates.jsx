import React from 'react'

export const LearnSates = () => {
  
  let variable1 = 'Vijay Kumar'
  function thisBaseFunction(){

    variable1 = "My name is Vijay Kumar"

    alert(variable1)

  }

  return (
    <div>

      <h1>Header Component</h1>
      <h2>{variable1}</h2>
      <button onClick={()=>thisBaseFunction()}>Click Button</button>

    </div>
  )
}
