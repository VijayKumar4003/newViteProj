import {useState} from 'react'

export const LearnSates = () => {
 const [data,setDataName] = useState(0)
  function updateNameData(){


    setDataName(data+1)
    // alert(name)
  }

  return (
    <div>
      <h1 style={{color:'red'}}>Learn States in React</h1>
      <hr />
      <h2>{data}</h2>
      <button onClick={()=>updateNameData()}>Click Button</button>
    </div>
  )
}
