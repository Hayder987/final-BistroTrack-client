import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [disable, setDisable] = useState(true);
  const [captcha, setCaptcha] = useState("");
  const [verified, setVeriFied] = useState(false);
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';
  

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validCaptcha = () => {
    if (validateCaptcha(captcha)) {
      setDisable(false);
      setVeriFied(true);
    } else {
      setDisable(true);
      setVeriFied(false);
    }
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await loginUser(email, password);
    } catch (err) {
      Swal.fire(`${err}`);
    } finally {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    }
  };

  const googleLoginUser = async () => {
    try {
      await googleLogin();
    } catch (err) {
      Swal.fire(`${err}`);
    } finally {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from);
    }
  };

  return (
    <div>
      <form onSubmit={loginHandler} className="">
        <div className="flex flex-col gap-4">
          {/* email */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              className="p-3 rounded-lg outline-orange-400"
            />
          </div>
          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              required
              className="p-3 rounded-lg outline-orange-400"
            />
          </div>
          <p className=""></p>
          {/* Captcha */}
          <div className={`${verified ? "hidden" : "flex flex-col gap-2"}`}>
            <div className="bg-white p-4 rounded-lg focus:border-orange-400">
              <LoadCanvasTemplate />
            </div>
            <label className="font-semibold">Type This Code here</label>
            <div className="flex gap-12">
              <input
                onChange={(e) => setCaptcha(e.target.value)}
                type="text"
                name="captcha"
                required
                className="p-3 rounded-lg w-full outline-orange-400"
              />
              <div
                onClick={validCaptcha}
                className="bg-green-500 text-white cursor-pointer font-semibold py-3 px-8 rounded-md"
              >
                Verify
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              disabled={disable}
              className={`${
                disable ? "bg-gray-300 text-gray-500" : "bg-[#dab883] "
              } text-white font-semibold p-3 rounded-lg w-full`}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className="divider">OR</div>
      <div className="flex justify-center items-center py-4">
        <button
        onClick={googleLoginUser}
         className="flex justify-center bg-white w-full p-3 rounded-lg items-center gap-3">
          <span className="text-2xl">
            <FcGoogle />
          </span>
          <span className="">Login With Google</span>
        </button>
      </div>
      <div className="">
        <p className="text-center font-medium py-3">
          Don't Have Account?{" "}
          <Link to="/register">
            <span className="text-blue-600">Register Now</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
