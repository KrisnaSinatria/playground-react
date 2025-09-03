import { useContext } from "react";
import { Context } from "../context/UserContext";

const Parent = () => {

  const data = useContext(Context);
  

  return (
    <>
      ini halaman Parent
      {data.map((i: any) => {
        return <p key={i.idCategory}>{i.strCategory}</p>
      })}
    </>
  );
};

export default Parent;
