import React from 'react';
import instagram from "../../images/icons8-instagram 1.png";
import watsup from "../../images/icons8-whatsapp.png";

function Contact() {
  return (
        <div className="container contact__container">
              <div className="contacts__wrapper">
                  <div className="contact">
                      <h2>Contact</h2>
                      <a href="tel:+499999999999" className='tel'>+49 999 999 99 99</a>
                      <div className="social">
                          <a href="https://www.instagram.com/" className="intagram">
                              <img src={instagram} alt="instagram" />
                              <p>instagram</p>
                          </a>
                          <a href="https://www.whatsapp.com/" className='watsUp'>
                              <img src={watsup} alt="watsup" />
                              <p>WhatsApp</p>
                          </a>
                      </div>
                  </div>
                  <div className="adress__wrapper">
                      <h2>Address</h2>
                  <a href="https://goo.gl/maps/38Wpe7XUN2MCEUAC9">Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</a>
                  <div>
                      <h3>Working Hours:</h3>
                      <p className="working_hours">24 hours a day</p>
                  </div>
                      
                  </div>
              </div>
              <div className="map__wrapper">
              <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427863184!2d13.372464412700221!3d52.50793613700546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1689182750225!5m2!1sru!2sde" 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
        </div>
  )
}

export default Contact