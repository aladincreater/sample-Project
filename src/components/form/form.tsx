import { useState, useEffect } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Employee) => {
    if (formData) {
      setFormData({ ...formData, [field]: e.target.value });
    } else {
      console.error("formData is null");
    }
  };

  if (!formData) {
    console.log("No data to display");
    return <div>No data to display</div>;
  }

  const saveData = () => {

    console.log("Saved Data:", { ...props.editData, ...formData });

    props.saveData({ ...props.editData, ...formData });

  };

  return (
    <form>
      <div>
        <label>FirstName</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) => handleChange(e, "firstName")}
        />
      </div>
      <div>
        <label>Age</label>
        <input type="number" value={formData.age} onChange={(e) => handleChange(e, "age")} />
      </div>
      <div>
        <label>ContactNumber</label>
        <input
          type="text"
          value={formData.contactNumber}
          onChange={(e) => handleChange(e, "contactNumber")}
        />
      </div>
      <div>
        <label>Date Of Birth</label>
        <input type="text" value={formData.dob} onChange={(e) => handleChange(e, "dob")} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={formData.email} onChange={(e) => handleChange(e, "email")} />
      </div>
      <button type="button" onClick={saveData}  className="button-login">
        Save
      </button>
    </form>
  );
};

export default Form;
