import { useParams } from "react-router";

const ItemDetail = () => {
  const  slug = useParams();
  console.log(slug);
  
  return (
    <>
    <h1 className="">ini itemDetail</h1>
    <p className="">{slug.params}</p>

    </>
  );
};

export default ItemDetail;
