import { Link } from "react-router-dom";
import PropTypes from 'prop-types'; // 檢查 React props 和相近的 Obj


// 把 NavLink組件化
const NavLink = (
  { to, children }
) => (
  <Link
    to={to}
    className="link-effect m-2 cursor-crosshair rounded p-4 font-black hover:rounded hover:bg-sky-200 hover:text-indigo-800"
  >
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default NavLink;
