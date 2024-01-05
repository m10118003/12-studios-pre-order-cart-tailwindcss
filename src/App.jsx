import NavLink from "@/components/NavLink";
// import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom"; // 引入 React Router 相關元件
// import "./App.css";
import "./styles/style.scss";
// import style from "./styles/style.module.scss";

const links = [
  { id: "1", to: "/Home", label: "Home" },
  { id: "2", to: "/QuickStart", label: "Quick Start" },
  { id: "3", to: "/AxiosDemo", label: "AxiosDemo" },
];

export default function App() {
  // const cardBtn:string = "card-btn border-dashed border-2 border-black-600 hover:bg-[#feb28e] hover:text-indigo-600";
  return (
    <nav className="text-2xl mx-auto">
      {links.map((link) => (
        <NavLink key={link.id} to={link.to}>
          {link.label}
          {/* <p className={style.abc123}>text</p> */}
        </NavLink>
      ))}
    </nav>
  );
}