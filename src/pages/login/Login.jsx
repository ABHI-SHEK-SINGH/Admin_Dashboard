import "./login.css"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";


import Sidebar from "../../components/sidebar/Sidebar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navitage = useNavigate();
    const { dispatch } = useContext(AuthContext)

    function hanleLogin(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user });
                navitage("/")
            })
            .catch((error) => {
                setError(true)
            });


    }

    return (


        <div className="login_page">
            {/* <YourComponent />
            <form className="form_container">
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={hanleLogin}>Login</button>
                {error && <span>Wrong email or password</span>}
            </form> */}

            <img className="wave" src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png" />

            <div className="img_background">
                <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" alt="Background" />
            </div>
            <div className="login-content">
                <form className="form_container">
                    <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" alt="Avatar" />
                    <h2 className="title">Welcome</h2>
                    <div className="input-div one">

                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Username" className="input" onChange={e => setEmail(e.target.value)} />


                    </div>
                    <div className="input-div pass">

                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Password" className="input" onChange={e => setPassword(e.target.value)} />


                    </div>
                    <a href="#">Forgot Password?</a>
                    <input type="submit" className="btn" value="Login" onClick={hanleLogin} />
                    {error && <span>Wrong email or password</span>}
                </form>
            </div>

        </div>


    )
}
export default Login; 