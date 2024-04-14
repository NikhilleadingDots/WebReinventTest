import React, {useEffect, useState} from "react";
import CommonForm from "../../Common/CommonForm";
import {useRegisterUserMutation} from "../../Services/authApi";
import {useNavigate} from "react-router-dom";

// interface registerProps
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [registerUser, { isSuccess: registerUserSuccess}] = useRegisterUserMutation();
 
  const [registerData, setRegisterData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  useEffect(() => {
    if (registerUserSuccess) {
      navigate("/dashboard");
    }
  }, [registerUserSuccess]);
  const handleClick = () => {
    let value = {
      email: registerData?.email,
      password: registerData?.password
    };
    registerUser(value);
  };

  return (
    <>
      <CommonForm
        onClick={handleClick}
        onChange={handleChange}
        title={"Create an account"}
        loginData={registerData}
        description={"Enter your information to create an account"}
        buttonTitle={"Register"}
      />
    </>
  );
};

export default Register;
