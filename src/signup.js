import { useState ,useEffect} from "react";

function Signup() {

    const initialValues = { username:"",email:"",password:"",confirmPassword:""};
  const [formValues,setformValues] = useState(initialValues);
  const [formError,setformError] = useState({});
  const [isSubmit ,setisSubmit] = useState(false);

  const handleChange = (e) =>{
    const { name , value } = e.target;
    setformValues({ ...formValues , [name]: value });
  };

  const handleSubmit = (e) =>{
    // e.preventDefault()
    setformError(validate(formValues));
    setisSubmit(true);
    
    
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formError, formValues, isSubmit]);

  

  const validate = (values) =>{
    const error ={};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i ;

    if (!values.username) {
      error.username = "Username is required!";
    }

    if (!values.email) {
      error.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } 

    if (values.confirmPassword !== values.password){
      error.confirmPassword="Password does not match";
    }

    return error;
  };

    return (
        <div className="Signup" >
    
        <h1 className='page-title'>Signup</h1>
        <div className="container" onSubmit={handleSubmit}>
            <div className="mb-12" id="1">
                <input type="text" 
                id="1"
                className="form-control" 
                name="username" 
                placeholder="Full-Name" 
                value={formValues.username}
                onChange = {handleChange}
                />
            </div>
            <p>{formError.username}</p>
            <div className="mb-12">
                <input type="email" 
                className="form-control" 
                name="email" 
                placeholder="E-mail" 
                value={formValues.email} 
                onChange = {handleChange}
                />
            </div>
            <p>{formError.email}</p>
            <div className="mb-12">
                <input type="password" 
                className="form-control" 
                name="password" 
                placeholder="Password"  
                value={formValues.password} 
                onChange = {handleChange}
                />
            </div>
            <p>{formError.password}</p>
            <div className="mb-12">
                <input type="password" 
                className="form-control" 
                name="confirmPassword"
                placeholder="Confirm-Password" 
                value={formValues.confirmPassword}
                onChange = {handleChange}
                />
            </div>
            <p>{formError.confirmPassword}</p>
            {/* <h6 id="done">Signed up successfully</h6> */}
            {Object.keys(formError).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
          ) : (
            <div className="ui message success"></div>
          )}
            <button type="button" className="btn btn-lg btn-light" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
  
  export default Signup;
  