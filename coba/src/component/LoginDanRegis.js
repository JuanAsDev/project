import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/App.css";
import { AdminContext } from "./AdminContext.js";

export const LoginDanRegis = () => {
  const time_to_show_login = 400;
  const time_to_hidden_login = 200;
  const time_to_show_sign_up = 100;
  const time_to_hidden_sign_up = 400;
  const time_to_hidden_all = 500;

  const [activeForm, setActiveForm] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useContext(AdminContext);

  const change_to_login = () => {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_login";
    document.querySelector(".cont_form_login").style.display = "block";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.opacity = "1";
    }, time_to_show_login);

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
    }, time_to_hidden_login);
  };

  const change_to_sign_up = () => {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_sign_up";
    document.querySelector(".cont_form_sign_up").style.display = "block";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.opacity = "1";
    }, time_to_show_sign_up);

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.display = "none";
    }, time_to_hidden_sign_up);
  };

  const hidden_login_and_sign_up = () => {
    document.querySelector(".cont_forms").className = "cont_forms";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
      document.querySelector(".cont_form_login").style.display = "none";
    }, time_to_hidden_all);
  };

  const handleLogin = () => {
    if (email === "admin@mail.com" && password === "admin") {
      setIsAdminLoggedIn(true);
      navigate("/home");
    } else {
      fetch("http://localhost:3500/users")
        .then((response) => response.json())
        .then((users) => {
          const foundUser = users.find(
            (user) => user.email === email && user.password === password
          );
          if (foundUser) {
            navigate("/home");
          } else {
            alert("Login gagal, coba lagi.");
            setUsername("");
            setPassword("");
          }
        })
        .catch((error) => {
          console.error("Kesalahan saat login:", error);
        });
    }
  };

  const handleRegister = () => {
    const isSignUpFormValid = () => {
      return (
        email.trim() !== "" && username.trim() !== "" && password.trim() !== ""
      );
    };
    if (isSignUpFormValid()) {
      fetch("http://localhost:3500/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Pengguna telah terdaftar:", data);
          setIsRegistered(true);

          setErrorMessage("");

          setEmail("");
          setUsername("");
          setPassword("");
        })
        .catch((error) => {
          console.error("Kesalahan saat mendaftar:", error);
        });
    } else {
      setErrorMessage("Semua field harus diisi!");
    }
  };

  return (
    <div className="cotn_principal">
      <div className="cont_centrar">
        <div className="cont_login">
          <div className="cont_info_log_sign_up">
            <div className="col_md_login">
              <div className="cont_ba_opcitiy">
                <h2>LOGIN</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn_login" onClick={change_to_login}>
                  LOGIN
                </button>
              </div>
            </div>
            <div className="col_md_sign_up">
              <div className="cont_ba_opcitiy">
                <h2>SIGN UP</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn_sign_up" onClick={change_to_sign_up}>
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
          <div className="cont_back_info">
            <div className="cont_img_back_grey">
              <img
                src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
                alt=""
              />
            </div>
          </div>
          <div className="cont_forms">
            <div className="cont_img_back_">
              <img
                src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d"
                alt=""
              />
            </div>
            <div className="cont_form_login">
              <a href="#" onClick={hidden_login_and_sign_up}>
                <i className="material-icons">&#xE5C4;</i>
              </a>
              <h2>LOGIN</h2>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn_login" onClick={handleLogin}>
                LOGIN
              </button>
            </div>
            <div className="cont_form_sign_up">
              <a href="#" onClick={hidden_login_and_sign_up}>
                <i className="material_icons">&#xE5C4;</i>
              </a>
              <h2>SIGN UP</h2>
              {errorMessage && (
                <div className="error-message text-red-600">{errorMessage}</div>
              )}
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn_sign_up" onClick={handleRegister}>
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginDanRegis;
