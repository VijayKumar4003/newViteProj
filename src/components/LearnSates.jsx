import {useState} from 'react'

export const LearnSates = () => {
  
 const [name,setDataName] = useState('Vijay Name will be Updated')
 
 
  function updateNameData(){

    setDataName('Vijay Kumar')

   
   
    // alert(name)

  }


  return (
    <div>

      <h1 style={{color:'red'}}>Learn States in React</h1>
      <hr />
      
      <h2>{name}</h2>
      <button onClick={()=>updateNameData()}>Click Button</button>

    </div>
  )


}
