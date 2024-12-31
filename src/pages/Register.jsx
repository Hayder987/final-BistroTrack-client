import loginBg from "../assets/others/authentication.png";
import Container from "../components/Container";
import loginBanner from "../assets/others/authentication2.png";
import RegisterForm from "../components/RegisterForm";
import { useState } from "react";

const Register = () => {
     const [imagePreview, setImagePreview] = useState(null);
  return (
    <div
      style={{ background: `url(${loginBg})` }}
      className="min-h-[100vh] flex justify-center items-center"
    >
      <Container>
        <div
          style={{ background: `url(${loginBg})` }}
          className="shadow-xl p-4 md:p-8 lg:p-14 lg:px-32 flex gap-10 lg:gap-20 flex-col lg:flex-row"
        >
          {/* image */}
          <div className="lg:w-1/2">
            <img src={imagePreview?imagePreview:loginBanner} alt="" className="" />
          </div>
          {/* form */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl text-center py-4">Register</h1>
            <RegisterForm 
            setImagePreview={setImagePreview}
            ></RegisterForm>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Register;
