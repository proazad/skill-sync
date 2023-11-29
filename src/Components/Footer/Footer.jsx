import { Link } from "react-router-dom";
import SiteLogo from "../siteTitle/SiteLogo";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 sm:grid-cols-2 gap-5 xl:gap-20 p-2 sm:p-10 bg-base-200 text-base-content">
      <aside >
        <SiteLogo />
        <p className="mt-3">
          SkillSync Hub Corporation
          <br />
          Providing reliable tech Training since 2010
        </p>
      </aside>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-around">
        <nav>
          <header className="footer-title">Services</header>
          <ul>
            <li>
              <Link to={"/"} className="font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/allclasses"} className="font-semibold">
                All Course
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <ul>
            <li>
              <a className="link link-hover">About us</a>
            </li>
            <li>
              <a className="link link-hover">Contact</a>
            </li>
            <li>
              <a className="link link-hover">Jobs</a>
            </li>
            <li>
              <a className="link link-hover">Press kit</a>
            </li>
          </ul>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <ul>
            <li>
              <a className="link link-hover">Terms of use</a>
            </li>
            <li>
              <a className="link link-hover">Privacy policy</a>
            </li>
            <li>
              <a className="link link-hover">Cookie policy</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
