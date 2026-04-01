import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRegHeart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import styles from "./nav.module.css";
import axios from "axios";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [showLogin, setShowLogin] = useState(false);
  const { showLogin, setShowLogin } = useContext(StoreContext);
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const location = useLocation();
  const isHome = location.pathname === "/";
  const isContact = location.pathname === "/contact";




  const Register = async () => {
    if (password !== confirmpassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const Formdata = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirmpassword
      }
      const res = await axios.post(`https://astrix-backend.onrender.com/register/reg/`, Formdata)
      alert("Registration successful. Please login.");
      console.log(res)
      setIsRegister(false);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

    } catch (err) {
      console.log(err, 'err')
    }
  }


  const Login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const Formdata = {
        email,
        password
      };

      const res = await axios.post(`https://astrix-backend.onrender.com/register/login/`, Formdata);
      localStorage.setItem('token', res.data.token);
      setShowLogin(false);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };





  return (
    <>
      <header className={styles.nav}>
        <div
          className={styles.logo}
          style={{ color: isHome || isContact ? "#fff" : "#000" }}
        >
          ASTRIX
        </div>

        <ul
          className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
          style={{ color: isHome || isContact ? "#fff" : "#000" }}
        >
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/features">FEATURES</Link></li>
          <li><Link to="/contact">CONTACT</Link></li>
        </ul>

        <div
          className={styles.icons}
          style={{ color: isHome || isContact ? "#fff" : "#000" }}
        >
          <FaUserCircle
            onClick={() => setShowLogin(true)}
            className={styles.userIcon}
          />
          <Link to="/wishlist"><FaRegHeart /></Link>
          <Link to="/cart"><FiShoppingBag /></Link>
        </div>

        <div
          className={styles.menuToggle}
          style={{ color: isHome || isContact ? "#fff" : "#000" }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </header>

      {showLogin && (
        <div className={styles.overlay}>
          <div className={styles.loginBox}>
            <button
              className={styles.closeBtn}
              onClick={() => {
                setShowLogin(false);
                setIsRegister(false);
              }}
            >
              <MdCancel />
            </button>

            {/* Dynamic Title */}
            <h2>{isRegister ? "Register" : "Login"}</h2>

            {/* Register Extra Field */}
            {isRegister && (
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
            )}

            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            {isRegister && (
              <input type="password" placeholder="Confirm Password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            )}

            <button className={styles.loginBtn} onClick={isRegister ? Register : Login}>
              {isRegister ? "Register" : "Login"}
            </button>

            <div className={styles.signin}>
              {isRegister ? (
                <p>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsRegister(false)}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setIsRegister(true)}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    Sign up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;




// import { useState, useContext } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FaRegHeart, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
// import { FiShoppingBag } from "react-icons/fi";
// import { MdCancel } from "react-icons/md";
// import styles from "./nav.module.css";
// import axios from "axios";
// import { StoreContext } from "../context/StoreContext";

// const Nav = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { showLogin, setShowLogin } = useContext(StoreContext);

//   const [isRegister, setIsRegister] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");

//   const location = useLocation();
//   const isHome = location.pathname === "/";
//   const isContact = location.pathname === "/contact";

//   // ---------------- REGISTER ----------------
//   const Register = async () => {
//     if (password !== confirmpassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     setLoading(true);
//     try {
//       await axios.post("http://127.0.0.1:8000/register/reg/", {
//         name,
//         email,
//         password,
//         confirm_password: confirmpassword,
//       });

//       alert("Registration successful. Please login.");

//       setIsRegister(false);
//       setName("");
//       setEmail("");
//       setPassword("");
//       setConfirmPassword("");
//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.message || "Registration failed");
//     }
//     setLoading(false);
//   };

//   // ---------------- LOGIN ----------------
//   const Login = async () => {
//     if (!email || !password) {
//       alert("Please enter email and password");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await axios.post(
//         "http://127.0.0.1:8000/register/login/",
//         { email, password }
//       );

//       localStorage.setItem("token", res.data.token);

//       // set default auth header
//       axios.defaults.headers.common[
//         "Authorization"
//       ] = `Bearer ${res.data.token}`;

//       // reset fields
//       setEmail("");
//       setPassword("");

//       setShowLogin(false);
//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.message || "Login failed");
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <header className={styles.nav}>
//         <div
//           className={styles.logo}
//           style={{ color: isHome || isContact ? "#fff" : "#000" }}
//         >
//           ASTRIX
//         </div>

//         <ul
//           className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
//           style={{ color: isHome || isContact ? "#fff" : "#000" }}
//         >
//           <li className={location.pathname === "/" ? styles.active : ""}>
//             <Link to="/">HOME</Link>
//           </li>
//           <li className={location.pathname === "/about" ? styles.active : ""}>
//             <Link to="/about">ABOUT</Link>
//           </li>
//           <li className={location.pathname === "/shop" ? styles.active : ""}>
//             <Link to="/shop">SHOP</Link>
//           </li>
//           <li className={location.pathname === "/features" ? styles.active : ""}>
//             <Link to="/features">FEATURES</Link>
//           </li>
//           <li className={location.pathname === "/contact" ? styles.active : ""}>
//             <Link to="/contact">CONTACT</Link>
//           </li>
//         </ul>

//         <div
//           className={styles.icons}
//           style={{ color: isHome || isContact ? "#fff" : "#000" }}
//         >
//           <FaUserCircle
//             onClick={() => setShowLogin(true)}
//             className={styles.userIcon}
//           />
//           <Link to="/wishlist">
//             <FaRegHeart />
//           </Link>
//           <Link to="/cart">
//             <FiShoppingBag />
//           </Link>
//         </div>

//         <div
//           className={styles.menuToggle}
//           style={{ color: isHome || isContact ? "#fff" : "#000" }}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>
//       </header>

//       {showLogin && (
//         <div className={styles.overlay}>
//           <div className={styles.loginBox}>
//             <button
//               className={styles.closeBtn}
//               onClick={() => {
//                 setShowLogin(false);
//                 setIsRegister(false);
//               }}
//             >
//               <MdCancel />
//             </button>

//             <h2>{isRegister ? "Register" : "Login"}</h2>

//             {isRegister && (
//               <input
//                 type="text"
//                 placeholder="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             )}

//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             {isRegister && (
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmpassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//               />
//             )}

//             <button
//               className={styles.loginBtn}
//               onClick={isRegister ? Register : Login}
//               disabled={loading}
//             >
//               {loading
//                 ? "Please wait..."
//                 : isRegister
//                 ? "Register"
//                 : "Login"}
//             </button>

//             <div className={styles.signin}>
//               {isRegister ? (
//                 <p>
//                   Already have an account?{" "}
//                   <span
//                     onClick={() => setIsRegister(false)}
//                     style={{ cursor: "pointer", color: "blue" }}
//                   >
//                     Login
//                   </span>
//                 </p>
//               ) : (
//                 <p>
//                   Don’t have an account?{" "}
//                   <span
//                     onClick={() => setIsRegister(true)}
//                     style={{ cursor: "pointer", color: "blue" }}
//                   >
//                     Sign up
//                   </span>
//                 </p>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Nav;