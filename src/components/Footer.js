import React from "react";
import { Link } from "react-scroll";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="toTop">
          <Link
            to="homeSection"
            spy={true}
            smooth={true}
            delay={200}
            duration={1000}
            className="footerNavLink"
            activeClass="activeClass"
          >
            <IoIosArrowUp />
          </Link>
        </div>
        {/* <div>
          <p>
            <u>Organisations</u>
          </p>
          <p>
            <a href="https://dignityplatform.org/">Dignity Platform</a>
          </p>
          <p>
            <a href="https://upandcomingpodcast.co.uk/">
              The Up & Coming Podcast{" "}
            </a>
          </p>
        </div> */}
      </section>
    </>
  );
};

export default Footer;
