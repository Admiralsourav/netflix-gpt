import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // Validation Happening in the text boxes
    console.log("Handle Button Click Working")
    console.log(fullName)
    let message;
    if (fullName.current == null) {
      console.log("Entered 1")
      message = checkValidData(email.current.value, password.current.value);
      console.log(`Message from Sign In ${message}`)
    } else {
      console.log('Im in')
      message = checkValidData(email.current.value, password.current.value, fullName.current.value);
    }

    if (message !== null) return;

    if (message == null) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("user credentials" + user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage)
          });
      }
      else {
        //sign In Form
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User logged In" + user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage)
          });

      }
    }

    setErrorMessage(message)
    console.log(message);

  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg" alt="Netflix_login_bg" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute bg-black text-white my-36 mx-auto right-0 left-0 p-12 rounded-lg">
        <h1 className="font-bold p-4 my-4 text-3xl rounded-sm"> {isSignInForm ? "Sign In" : "Sign Up"} </h1>
        {
          !isSignInForm && (
            <input type="text" ref={fullName} className="w-full p-4 my-4 rounded-sm text-black" placeholder="Full Name" />
          )
        }
        <input type="text" ref={email} className="w-full p-4 my-4 rounded-sm text-black" placeholder=" Email Address" />
        <input type="password" ref={password} className="w-full p-4 my-4 text-black text-opacity-50" placeholder=" Password" />
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 p-4 w-full" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-4 cursor-pointer underline" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now!" : "Already a User Sign In Now!!!!"}</p>
      </form>
    </div>

  )
}

export default Login