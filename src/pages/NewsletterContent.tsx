import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function NewsLetterContent() {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);
  return <div>Sample - {id}</div>;
}
