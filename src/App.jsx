import "./App.css";
import { Props } from "./components/Props";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  const carName = "Ford";
  return (
    <>
      {/* The variable data will be sended to Component Props*/}
      <h1>Learning Props in React</h1>
      <hr />
      <hr />

      <Props brandName={carName} /> 

      <Props brand={carInfo} /> 
      
    </>
  );
}

export default App;
