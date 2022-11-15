import React, { useEffect, useState } from "react";
function SignUpForm() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    date: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    // if(!Object.keys(formValues).length===0 && Object.keys(formErrors).length===0){
    //     console.log("hit")
    //     setIsSubmit(true);
    // }
    // if(Object.values(formValues) && Object.keys(formErrors).length===0){
      if(Object.keys(errors).length===0){
        console.log("hit")
        setIsSubmit(true);
    }
  };

  // useEffect(() => {
  // //   console.log(formErrors);
  // //    if (Object.keys(errors).length === 0 && isSubmit) {
  // //       setIsSubmit(true);
  // //   }
  // // }, [formErrors, formValues]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("rejex", regex.test(values.email));
    // if (!values.firstname) {
    //   errors.firstname = "*Required";
    // }
    // if (!values.lastname) {
    //   errors.lastname = "*Required";
    // }
    // if (!values.email) {
    //   errors.email = "*Required";
    // } 
     if (!regex.test(values.email)) {
    //   console.log("hit");
      errors.email = "This is not a valid email format!";
    }
    // if (!values.password) {
    //   errors.password = "*Required";
    // } 
     if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    // if (!values.date) {
    //   errors.date = "*Required";
    // }
    return errors;
  };
  return (
    <div className="h-screen bg-blue-50 flex flex-row justify-center items-center ">
      {/* {Object.keys(formErrors).length===0 && isSubmit ? (
           <div className="ui message success ">Signed in successfully</div>
        ):(
            // <pre>{JSON.stringify(formValues,undefined, 3)}</pre>
            <div className='divider'>Not signed in</div>
        )} */}
      {isSubmit ? (
        <div>signedin successfully</div>
      ) : (
        <form onSubmit={handleSubmit} className="p-4">
          <h1 className="text-3xl font-bold my-2">SignUpForm</h1>
          <div className="ui divider"></div>
          <div className="border bg-gray-50 rounded w-90 border-3xl box-content p-5">
            <div className=" flex flex-row">
              <div className="field mr-2">
                <label className="font-bold flex">First name</label>
                <input
                  type="text"
                  className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none rounded-md"
                  name="firstname"
                  placeholder="Firstname"
                  value={formValues.firstname}
                  onChange={handleChange} 
                  required
                />
              </div>
              <p className="text-red-900 font-semibold">
                {/* {formErrors.firstname} */}
              </p>
              <div className="field">
                <label className="font-bold flex">Last name</label>
                <input
                  type="text"
                  className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none rounded-md"
                  name="lastname"
                  placeholder="Lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            {/* <p className="text-red-900 font-semibold">{formErrors.lastname}</p> */}
            <div className="field">
              <label className="font-bold flex">Email</label>
              <input
                type="text"
                className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none rounded-md"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* <p className="text-red-900 font-semibold">{formErrors.email}</p> */}
            <div className="field">
              <label className="font-bold flex">Password</label>
              <input
                type="password"
                className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none rounded-md"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
            </div>
            {/* <p className="text-red-900 font-semibold">{formErrors.password}</p> */}
            <br></br>
            <div className="field">
              <label className="font-bold flex">Date</label>
              <input
                type="date"
                className="w-full border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none rounded-md"
                name="date"
                placeholder="Date "
                onChange={handleChange}
                required
              />
            </div>
            {/* <p className="text-red-900 font-semibold">{formErrors.date}</p> */}
            <br></br>
            <div className="field flex flex-row">
              <input
                type="checkbox"
                className="mr-2 border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none  rounded-md"
                name="checkbox"
                required
              />
              <p className="text-xl">I agree to the terms and conditions</p>
            </div>
            <br></br>
            {/* {isSubmit ? <button className=" border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none bg-gray-100 font-semibold w-5/12  rounded-md">
              Submit
            </button>:<button className=" border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none bg-gray-100 font-semibold w-5/12  rounded-md">
              Submit
            </button>} */}
            <button className=" border border-3 rounded border-gray-400 py-2 px-3 focus:outline-none bg-gray-100 font-semibold w-5/12  rounded-md">Submit</button>
            
          </div>
        </form>
      )}
    </div>
  );
}
export default SignUpForm;
