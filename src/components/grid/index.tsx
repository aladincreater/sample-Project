import { useEffect, useState } from "react";
import Form from "../form/form";
import "./index.css";
const Index = ():any => {
  interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    address:string;
    age:number;
    contactNumber:string;
    dob:string;
    email:string;
    imageUrl:string;
    salary:number;
  }
  
  const [data, setData] = useState<Employee[]>([]);

  const [error, setError] = useState<string>("");

  const [editData,setEditData] = useState<Employee[]>([]);



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



  const editHandler =(item:any) =>{
      setEditData(item);
  }








  return (
    <>
    {error? <h1>Please wait or refresh</h1>:
          (<div className="row">
        
          <div className="grid-data">
            <h1>API Data</h1>
            <div className="row-card">
            {data.map((item) => (
              <div key={item.id} className="card">
                <p>{item.firstName}</p>
                <p>{item.age}</p>
                <p>{item.contactNumber}</p>
                <p>{item.dob}</p>
                <p>{item.email}</p>
                <button onClick={()=>editHandler(item)}>Edit</button>
              </div>
            ))}
            </div>
          
          </div>
          <div className="grid-form">
            <Form editData={editData}></Form>
          </div>
        </div>)

        }
      
    </>
  );
};
export default Index;
