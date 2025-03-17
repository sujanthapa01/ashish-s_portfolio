import Link from "next/link";
import {FaGithub,FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <Link href='/users/about' className="link link-hover">About us</Link>
    <Link href='/users/contact' className="link link-hover">Contact</Link>
    <Link href='/users/projects' className="link link-hover">Projects</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col text-3xl gap-4">
      <a href="https://github.com/Ashishkapoor1469">
      <FaGithub />
      </a>
      <a href="https://linkedin.com/in/ashish-kapoor-225535346">
      <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/ashish_kapoor_1?utm_source=qr&igsh=MWk0amkyZHdlc2E3Yg==">
      <FaInstagram  />
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by @Ashish99</p>
  </aside>
</footer>
    </>
  );
}
