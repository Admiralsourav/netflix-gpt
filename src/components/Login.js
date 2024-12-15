import { useState } from "react"
import Header from "./Header"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg" alt="Netflix_login_bg" />
      </div>
      <form className="w-3/12 absolute bg-black text-white my-36 mx-auto right-0 left-0 p-12 rounded-lg">
        <h1 className="font-bold p-4 my-4 text-3xl rounded-sm"> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {
          !isSignInForm && (
            <input type="text" className="w-full p-4 my-4 rounded-sm text-black" placeholder="Full Name" />
          )
        }
        <input type="text" className="w-full p-4 my-4 rounded-sm text-black" placeholder=" Email Address" />
        <input type="password" className="w-full p-4 my-4" placeholder=" Password" />
        <button className="p-4 my-4 bg-red-700 p-4 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-4 cursor-pointer underline" onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now!" : "Already a User Sign In Now!!!!"}</p>
      </form>
    </div>

  )
}

export default Login