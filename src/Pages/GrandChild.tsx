import { useContext } from "react";
import { Context } from "../context/UserContext";

const GrandChild = () => {

  const name = useContext(Context);

  return (
    <>
      ini halaman GrandChild {name}
    </>
  );
};

export default GrandChild;
