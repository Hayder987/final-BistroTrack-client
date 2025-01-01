import { useEffect, useState } from "react";
import { photoUpload } from "../api/utilities";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { TbFidgetSpinner } from "react-icons/tb";

const RegisterForm = ({ setImagePreview }) => {
  const [img, setImg] = useState(null);
  const { registerUser, updateUser, loading } = useAuth();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    if (img) {
      const imageURL = URL.createObjectURL(img);
      setImagePreview(imageURL);
      return () => URL.revokeObjectURL(imageURL);
    }
  }, [img, setImagePreview]);

  const registerHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.photo.files[0];

    const imageUrl = await photoUpload(image);

    try {
      await registerUser(email, password);
      await updateUser(name, imageUrl);
    } catch (err) {
      Swal.fire(`${err}`);
    } finally {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Registration SuccessFully",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    }
  };

  return (
    <div>
      <form onSubmit={registerHandler} className="">
        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              className="p-3 rounded-lg outline-orange-400"
            />
          </div>
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
          {/* password */}
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Password</label>
            <input
              type="password"
              name="password"
              required
              className="p-3 rounded-lg outline-orange-400"
            />
          </div>
          {/* photo */}
          <div className="flex flex-col gap-2 py-5">
            <label className="font-semibold">
              <input
                type="file"
                name="photo"
                onChange={(e) => setImg(e.target.files[0])}
                required
                accept="images/*"
                className="hidden w-full h-full"
              />
              <div className="p-3 overflow-hidden border-dashed border-2 border-gray-500 cursor-pointer">
                <p className="text-center bg-orange-500 text-white p-2">
                  {img ? img.name : "Upload Photo"}
                </p>
              </div>
            </label>
          </div>
          <div className="">
            <button
              type="submit"
              className={`text-white  bg-[#dab883] font-semibold p-3 rounded-lg w-full`}
            >
             {loading ? "Creating..." : "Register"}
            </button>
          </div>
        </div>
      </form>
      <p className="text-center font-medium py-3">
        Have An Account?{" "}
        <Link to="/login">
          <span className="text-blue-600">Login Now</span>
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
