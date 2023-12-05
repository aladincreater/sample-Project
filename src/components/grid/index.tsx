import { useEffect, useState } from "react";
import Form from "../form/form";
import "./index.css";

const Index = (): JSX.Element => {
  interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    age: number;
    contactNumber: string;
    dob: string;
    email: string;
    imageUrl: string;
    salary: number;
  }

  const [data, setData] = useState<Employee[]>([]);
  const [error, setError] = useState<string>("");
  const [editData, setEditData] = useState<Employee | null>(null);
  const [sortOption, setSortOption] = useState<keyof Employee>("firstName");

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then((res) => res.json())
      .then((result) => setData(result))
      .catch((err) => setError(err));
      
  }, []);

  const editHandler = (item: Employee): void => {
    setEditData(item);
  };

  const saveDataHandler = (updatedData: Employee): void => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === updatedData.id ? { ...item, ...updatedData } : item
      )
    );
    setEditData(null);
  };

  const deleteHandler = (item: Employee): void => {
    setData((prevData) =>
      prevData.filter((dataItem) => dataItem.id !== item.id)
    );
    setEditData(null);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSortOption(e.target.value as keyof Employee);
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortOption] < b[sortOption]) {
      return -1;
    }
    if (a[sortOption] > b[sortOption]) {
      return 1;
    }
    return 0;
  });

  return (
    <>
      {error ? (
        <h1>Please wait or refresh</h1>
      ) : data ? (
        <div className="row">
          <div className="grid-data">
            <h1>API Data</h1>
            <div>
              <label>Sort by:</label>
              <select onChange={handleSortChange} value={sortOption}>
                <option value="firstName">First Name</option>
                <option value="contactNumber">Contact Number</option>
                <option value="age">Age</option>
                <option value="dob">Date Of Birth</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="row-card">
              {sortedData.map((item) => (
                <div key={item.id} className="card">
                  <div className="form-child">
                    <label><b>First Name :</b></label>
                    {item.firstName}
                  </div>
                  <div className="form-child">
                    <label><b>Age :</b></label>
                    {item.age}
                  </div>
                  <div className="form-child">
                    <label><b>Contact Number :</b></label>
                    {item.contactNumber}
                  </div>
                  <div className="form-child">
                    <label><b>Date Of Birth :</b></label>
                    {item.dob}
                  </div> 
                  <div className="form-child">
                    <label><b>Email Address </b></label>
                    {item.email}
                  </div>
                  <div className="form-child">
                  <button
                    onClick={() => editHandler(item)}
                    className="button-login"
                  >
                    Edit
                  </button>
                  <button
                    className="button-login"
                    onClick={() => deleteHandler(item)}
                  >
                    Delete
                  </button>
                  </div>                
                 
                </div>
              ))}
            </div>
          </div>
          <div className="grid-form">
            <Form editData={editData} saveData={saveDataHandler} />
          </div>
        </div>
      ) : <h1>There is no data Available</h1>
    }
    </>
  );
};

export default Index;
