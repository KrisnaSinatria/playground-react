import { useContext } from "react";
import { Context } from "../context/UserContext";

const Parent = () => {

  const data = useContext(Context);
  console.log(data);
  

  return (
    <>
      ini halaman Parent
      {data.map((i: any) => {
        console.log(i);
        return <p key={i.idCategory}>{i.strCategory}</p>
      })}
    </>
  );
};

export default Parent;
