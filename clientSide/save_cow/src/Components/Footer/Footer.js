import React from "react";
import './Footer.css';
import { FooterContent, FooterPart, ImagesContent, Savecows, SocialMediaImages } from "./CostFooter";
function Footer(){
    return(
        <div>
            <div className="footer-container">
                <div className="flext">
                    {
                        Savecows.map((items,i) => (
                            <div>
                                <h1 key={i} className="savecow">{items.text}</h1>
                                <p key={i} className="footer-wrapper">{items.subText}</p>
                            </div>
                        ))
                    },
                    {
                        FooterPart.map((item,i)=>(
                            <div className="footer-social">
                                <h3 key={i} className="hospital">{item.mainText}</h3>
                                {
                                    item.para.map((item,i)=>(
                                        <div className="hospital_paragraph">
                                            <p key={i}>{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    },
                    {
                        FooterContent.map((item,i)=>(
                            <div className="footer-contact">
                                 <h3 key={i} className="links">{item.Links}</h3>
                                {
                                    item.content.map((item,i)=>(
                                        <div>
                                            <p key={i} className="paragraph">{item}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    },
                    {
                        ImagesContent.map((items,i)=>(
                            <div>
                                <h3 key={i} className="News-Letter">{items.text}</h3>
                                <img src={items.image} className="message"/>
                                <input text={items.input}/>
                                <hr/>

                            </div>
                        ))

                    },
                    {
                        SocialMediaImages.map((item,i)=>(
                            <div className="social-media-images">
                                <img src={item} key={i} />
                            </div>
                        ))
                    }
                    
               
                    {/* <div className="social-media-images">
                        <img src='/resources/facebook.png'alt="no image" className="facebook"/>
                        <img src='/resources/WhatsApp.webp'alt="no image" className="whatsapp"/>
                        <img src='/resources/phone.png'alt="no image" className="whatsapp"/> */} 
                        {/* <img src='/resources/phone.png' alt="no image" children="phone"/> */}
                    {/* </div> */} 
                </div> 
            </div>
        </div>
    )
}
export default Footer;