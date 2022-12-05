import logo from "../images/logo192.png";
import gray from "../images/gray-react-logo.jpg";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "LightNavbar" : "Navbar"}>
      <img src={logo} />
      <h3>ReactFacts</h3>
      <h4>React Course - Project 1</h4>
      <label class="switch">
        <input type="checkbox" onClick={props.toggleDarkMode} />
        <span class="slider round"></span>
      </label>
    </nav>
  );
}

export default Navbar;
