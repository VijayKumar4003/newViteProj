import './App.css'
import First from './components/First'
function App() {
  
  let myName = "Slow Bro Coder"
 
  function myfunction(){

      myName = 'slow_bro_coder'
      alert(myName)
  }

  return (
    <>
        
        <h1>This is where World will Change</h1>
        <button onClick={()=>myfunction()}>Click the Button</button>

        <h2>{myName}</h2>
    </>
  )
}

export default App
