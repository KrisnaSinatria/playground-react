import { Routes, Route } from "react-router";
import Item from "./Pages/Item";
import Home from "./Pages/Home"
import Error from "./Pages/Error";
import ItemDetail from "./Pages/ItemDetail";


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/item" element={<Item/>}/>
        <Route path="/item/:params" element={<ItemDetail/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App
