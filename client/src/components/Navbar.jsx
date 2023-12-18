import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../images/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutNavbar = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>의료 상담</h6>
          </Link>
          <Link className="link" to="/?cat=science">
            <h6>약 주천</h6>
          </Link>
          
          <Link className="link" to="http://localhost/">
            <h6>주변 약국</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logoutNavbar}> 로그 아웃 </span>
          ) : (
            <Link className="link" to="/login">
              로그인
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              글 쓰기
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
