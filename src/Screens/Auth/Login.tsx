import React, {useEffect, useState} from "react";
import CommonForm from "../../Common/CommonForm";
import { useLoginUserMutation } from "../../Services/authApi";
import { useNavigate } from "react-router-dom";

// interface registerProps
const Login: React.FC = () => {
  interface LoginData {
    email: string;
    password: string;
  }
  const navigate = useNavigate();
  const [ loginUser, {data,  isSuccess: loginUserSuccess} ] = useLoginUserMutation();
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: ""
  });
  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleClick = () => {
    let value = {
      email: loginData?.email,
      password: loginData?.password
    };
    loginUser(value); 
  };
  useEffect(() => {
    if (loginUserSuccess) {
      console.log("dataData", data)
      navigate("/dashboard");
    }
  }, [ loginUserSuccess ]);

  return (
    <>
      <CommonForm
        onClick={handleClick}
        onChange={handleChange}
        title={"Login"}
        loginData={loginData}
        description={"Enter your email and password to sign in"}
        buttonTitle={"Login"}
      />
    </>
  );
};

export default Login;
