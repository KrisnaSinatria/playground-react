import { useContext } from "react";
import { Context } from "../context/UserContext";

const Parent = () => {

  const name = useContext(Context);
  
  return (
    <>
    ini halaman Parent {name}
    </>
  );
};

export default Parent;
