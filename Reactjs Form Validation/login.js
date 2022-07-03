import {useState, useEffect} from 'react'

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
    // eslint-disable-next-line
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  return (
    
    <div>
        <form onSubmit={handleSubmit} action="">
            <h1 id='login-header'>Welcome</h1>
            <div className='email-box'>
                <label htmlFor=""><b>Email</b></label>
                <input 
                type="email"
                 name="email" 
                 id="email" 
                 placeholder='Email'
                 value={formValues.email}
                 onChange={handleChange}
                 />
            </div>
            <div className="password-box">
                <label htmlFor="">
                <strong>Password</strong>
                </label>
                <input 
                type="password" 
                name="password" 
                id="password"
                placeholder='password'
                value={formValues.password}
                onChange={handleChange}
                />
            </div>
            <button  id='gotosignup' >
            <strong>Signup</strong>
            </button>
        </form>      
    </div>
  )
}

export default Login