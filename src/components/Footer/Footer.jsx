import "./Footer.css"
import { assets } from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
{/* Left side */}
            <div className="footer-content-left">
                <img width={100} src={assets.logo} alt="" />
                <p>Enjoy culinary convenience with our diverse menu, promptly delivered to your doorstep. Elevate your dining experience with premium ingredients and seamless ordering. Savor gourmet delights from the comfort of home.</p>

                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
{/* Center Side */}
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
{/* Right Side */}
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8676859585521</li>
                    <li>info@lipton.com</li>
                </ul>
            </div>
        </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; Lipton.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
