import { useState, useEffect } from "react";
import './form.css';


const Form = (props: any): JSX.Element => {
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

  const [formData, setFormData] = useState<Employee | null>(null);

  useEffect(() => {
    if (props.editData) {

      setFormData({ ...props.editData });
    } else {

      setFormData(null);
    }
  }, [props.editData]);

  const handleChange = (e: any, field: keyof Employee) => {
    console.log("event value: "+e.target.value)
    if (formData) {
      if(e.target.value){
        setFormData({ ...formData, [field]: e.target.value });
      }
      else{
        alert(field +" field Cannot be empty")
      }
    } else {
      console.error("formData is null");
    }
  };

  if (!formData) {
    console.log("No data to display");
    return <div>No data to display</div>;
  }

  const saveData = (e:any) => {
    e.preventDefault();
    console.log("Saved Data:", { ...props.editData, ...formData });

    props.saveData({ ...props.editData, ...formData });

  };

  return (
    <form onSubmit={saveData} className="row-form">
      <div className="form-child">
        <label>FirstName</label>
        <input
          type="text"
          value={formData.firstName}
          id="firstname"
          onChange={(e) => handleChange(e, "firstName")}
        />
      </div>
      <div className="form-child">
        <label>Age</label>
        <input type="number" id="age" value={formData.age} onChange={(e) => handleChange(e, "age")} />
      </div>
      <div className="form-child">
        <label>ContactNumber</label>
        <input
          type="text"
          id="firstname"
          value={formData.contactNumber}
          onChange={(e) => handleChange(e, "contactNumber")}
        />
      </div>
      <div className="form-child">
        <label>Date Of Birth</label>
        <input type="text" id="firstname" value={formData.dob} onChange={(e) => handleChange(e, "dob")} />
      </div>
      <div className="form-child">
        <label>Email</label>
        <input type="email" id="firstname" value={formData.email} onChange={(e) => handleChange(e, "email")} />
      </div>
      <button type="submit" className="button-login button-alignment">
        Save
      </button>
    </form>
  );
};

export default Form;
