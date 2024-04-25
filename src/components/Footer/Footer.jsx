import { assets } from "../../assets/assets"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer" id="footer">
       <div className="footer-content">
        <div className="footer-content-left">
               <img src={assets.logo} alt="" />
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae placeat assumenda ex quisquam architecto molestiae non, qui nihil ut atque dolorum dolore aperiam? Consequuntur saepe, dignissimos fugit obcaecati ut optio.</p>
               <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
               </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
            </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
           </ul>
        </div>

       
       </div>
       <hr />
       <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Right Reserved.
       </p>
    </div>
  )
}

export default Footer
