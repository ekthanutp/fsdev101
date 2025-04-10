import "./App.css"
import Transaction from "./components/Transaction";
import Counter from "./components/Counter";


const Title =()=><h1 style={design}>แอพจัดการข้อมูลพนักงาน</h1>
const design = {color:'red',textAlign:'center',fontSize:'2rem'}

function App(){
  return(
    <div className="container">
      <Title/>
      <Transaction/>
      <Counter />
    </div>
  );
}

export default App
