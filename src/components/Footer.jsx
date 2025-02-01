import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './footer.css';


const Footer = () => {
  return (
      <div>
          <footer className="footer">
              <div className="footer-content">
                  <div className="social-media">
                      <h3>Follow Us</h3>
                      <ul className="social-icons">
                          <li>
                              <a href="https://www.facebook.com/profile.php?id=61572564808967" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                              </a>
                          </li>
                          {/* <li>
                              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faXTwitter} className="icon" />
                              </a>
                          </li> */}
                          <li>
                              <a href="https://www.instagram.com/_shree_hospitality?igsh=dzhvOWZ5c2VtaWdp&utm_source=qr " target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className="contact-us">
                      <h3>Contact Us</h3>
                      <p>Phone: 8118022033</p>
                      <p>Email: 8118022033</p>
                  </div>
              </div>
              <div className="footer-bottom">
                  <p>&copy; {new Date().getFullYear()} Shree Hospitality. All rights reserved.</p>
              </div>
          </footer>
    </div>
  )
}

export default Footer