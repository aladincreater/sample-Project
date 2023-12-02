const Form = (props:any):any =>{
    // interface Employee {
    //     id: number;
    //     firstName: string;
    //     lastName: string;
    //     address: string;
    //     age: number;
    //     contactNumber: string;
    //     dob: string;
    //     email: string;
    //     imageUrl: string;
    //     salary: number;
    //   }
      
    //   interface FormProps {
    //     editData: Employee[];
    //   }
      console.log(props.editData.firstName);
    return(
        <form>
            <div>
                <label>FirstName</label>
                <input type="text" value={props.editData.firstName}></input>
            </div>
            <div>
                <label>Age</label>
                <input type="number" value={props.editData.age}></input>
            </div>
            <div>
                <label>ContactNumber</label>
                <input type="text" value={props.editData.contactNumber}></input>
            </div>
            <div>
                <label>Date Of Birth</label>
                <input type="text" value={props.editData.dob}></input>
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={props.editData.email}></input>
            </div>

        </form>
    )
}

export default Form;