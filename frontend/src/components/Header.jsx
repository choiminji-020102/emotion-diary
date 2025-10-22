// import { useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Header.css";

const Header = ({ title, leftChild, rightChild }) => {
  //   const nav = useNavigate();

  return (
    <header className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{title}</div>
      <div className="header_right">{rightChild}</div>
    </header>
  );
};

export default Header;
