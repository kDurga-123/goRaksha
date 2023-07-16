import React from "react";
import './Footer.css';
function Footer(){
    return(
        <div>
            <div className="footer-container">
                <div>
                <h1 className="savecow">savecows</h1>
                <p className="footer-wrapper">watch vedios and read information on website <br></br>
                    and please learn about how to care cow<br></br>
                     please save cow
                </p>
                </div>
                <div className="footer-social">
                    <h3 className="hospital">hospitals</h3>
               <p>Happy Tails Pet well vet animal hospital and surgical centreGuntur</p> 
                  <p>4.9</p>  
                   <p> (215) · Veterinarian</p>
                    <p>Guntur, Andhra Pradesh · 078931 78428</p>
                   <p>Closed ⋅ Opens 5:30 pm Wed</p> 
                   <p>"It is a nice veterinary hospital in Guntur."</p> 
                </div>
                <div className="footer-contact">
                    <h3 className="links">links</h3>
                    <p>home</p>
                    <p>careCow</p>
                    <p>doctordetails</p>
                    <p>effects</p>
                </div>
                <div>
                    <h3>News Letter</h3>
                    <img src='/resources/messages.png' className="message"/>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}
export default Footer;