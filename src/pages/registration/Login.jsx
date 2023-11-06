import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    if (name == "" || email == "" || password == "") {
      return toast.error("All fields are required !");
    }
    if (!emailPattern.test(email)) {
      return toast.error("Provide a valid email !");
    }
    if (password.length < 6) {
      return toast.error("Password should be at least 6 characters long !");
    }
    setName(""), setEmail(""), setPassword("");
    navigate('/shopping-react/')
    return toast.success("Logged in successfully. You can shop now");
  };

  return (
    <main className="onRenderAnimate">
      <form className="flex flex-col items-center w-11/12 max-w-sm m-auto mt-16 gap-4">
        <h1 className="text-3xl font-extrabold">Login</h1>
        <label className="self-start" htmlFor="loginName">
          Name:
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full outline-none p-4 rounded-2xl bg-gray-300"
          placeholder="Your name.."
          type="text"
          name="loginName"
          id="loginName"
          required
        />
        <label className="self-start" htmlFor="loginEmail">
          Email:
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-none p-4 rounded-2xl bg-gray-300"
          placeholder="Your email.."
          type="email"
          name="loginEmail"
          id="loginEmail"
          required
        />
        <label className="self-start" htmlFor="loginPassword">
          Password:
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full outline-none p-4 rounded-2xl bg-gray-300"
          placeholder="Your password.."
          type="password"
          name="loginPassword"
          id="loginPassword"
          required
        />
        <button
          onClick={signup}
          className="bg-[#222222] py-4 w-full text-white rounded-3xl text-xl transition-all duration-500 min-[800px]:hover:scale-110"
          type="submit"
        >
          Login
        </button>
      </form>
      <section className="w-11/12 max-w-sm m-auto text-center my-4 font-extrabold ">
        <p>OR</p>
        <button
          className="bg-[#D14938] text-white py-4 w-full text-xl rounded-3xl my-2 transition-all duration-500 min-[800px]:hover:scale-110"
          type="button"
        >
          Login With Google
        </button>
      </section>
    </main>
  );
};

export default Login;
