import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const LoginForm = () => {
  const [disable, setDisable] = useState(true);
  const [captcha, setCaptcha] = useState("");

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const validCaptcha = () => {
    //  const user_captcha_value = captcha;
    //  console.log(user_captcha_value)
    if (validateCaptcha(captcha)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div>
      <form className="">
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
          <div className="flex flex-col gap-2">
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
            <div onClick={validCaptcha} className="bg-green-500 text-white cursor-pointer font-semibold py-3 px-8 rounded-md">
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
    </div>
  );
};

export default LoginForm;
