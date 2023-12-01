import { useEffect, useState } from "react";
import Form from "../form/form";
import "./index.css";
const Index = ():any => {
  const [data, setData] = useState({});

  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((res) => {
        return res.json();
      })
      .then((result) => setData(result))
      .catch((err) => {
        setError(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <div className="row">
        <div className="grid">
            {Object.keys(data).map(item=>{
                return(
                    <div>
                        <p>
                        {[item] : data[item as keyof typeof data] }
                        </p>
                    </div>
                )
            })}
        </div>
        <div className="grid">
          <Form></Form>
        </div>
      </div>
    </>
  );
};
export default Index;
