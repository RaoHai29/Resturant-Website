import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservations</Link>
            <Link to="/order">Order</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>123 karachi city ,</li>
            <li>Sindh Pakistan</li>
            <br></br>
            <li>92 031231232</li>
            <br></br>
        
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="raoabdulhaireact.web.app"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
            <a
              href="https://www.instagram.com/raoabdulhai/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </ul>
        </li>
      </menu>
    </footer>
  );
}
