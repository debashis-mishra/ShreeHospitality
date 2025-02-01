import { useState } from "react";
import "./about.css";

const About = () => {
    const [showFullText, setShowFullText] = useState(false);

    const aboutText = `Welcome to Shree Hospitality, where every journey begins with warmth and every stay is an experience to cherish. We are proud to mark our debut in the sacred city of Puri, Odisha, a land steeped in spirituality and culture, home to the revered Jagannath Temple.

    Shree Hospitality was born with a vision to provide guests with an exceptional blend of comfort, tradition, and heartfelt service. Our inaugural venture, BaliGhara, is a charming homestay nestled in the heart of Puri. Designed to offer an unforgettable stay, BaliGhara combines the tranquility of a home with the unique vibrancy of Odisha's rich heritage.

    At BaliGhara, we strive to create an experience that goes beyond accommodation. From our thoughtfully furnished spaces—including a cozy living room, three comfortable bedrooms, two serene courtyards, and a fully equipped kitchen—to our personalized service, we ensure that every guest feels at home.

    This is just the beginning of our journey. Inspired by the spirit of Odisha, we aim to extend our hospitality across India and eventually, the globe. Our mission is to share the essence of Odisha's warmth and culture with the world, creating spaces where every guest feels valued and connected.

    We are deeply grateful for your blessings and support as we embark on this exciting journey. Stay connected with us for updates about BaliGhara and the future ventures of Shree Hospitality.

    Join us in experiencing the warmth, beauty, and spiritual essence of Odisha—your home away from home awaits at Shree Hospitality.`;

    return (
        <div className="about-contact">
            <div className="about">
                <div className="title-bar">About Us</div>
                <div className="about-content">
                    <p>
                        {aboutText.length > 80
                            ? `${aboutText.slice(0, 80)}...`
                            : aboutText}
                    </p>
                    {aboutText.length > 100 && (
                        <button className="view-more-btn" onClick={() => setShowFullText(true)}>
                            View More
                        </button>
                    )}
                </div>
            </div>

            {/* Full Text Popup */}
            {showFullText && (
                <div className="popup-overlay" onClick={() => setShowFullText(false)}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setShowFullText(false)}>✖</button>
                        <p>{aboutText}</p>
                    </div>
                </div>
            )}

            <div className="contact">
                <div className="title-bar">Contact</div>
                <div className="contact-content">
                    <p>
                        For booking feel free to reach us at
                        <br />Phone: 8118022033
                        <br />Email: Shreehospitality75@gmail.com
                    </p>
                </div>
            </div>

            <a
                href="https://www.google.com/maps/place/Bali+Ghara/@19.8049739,85.8236448,625m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a19c540966fea99:0x69e5fa56660808d9!8m2!3d19.8049739!4d85.8236448!16s%2Fg%2F11lyrbdzzx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
            >
                <div className="address">
                    <div className="title-bar">Address</div>
                    <div className="address-content">
                        <p>Jenari Gacha Square, Kundhei Benta Sahi, Puri-752001, Odisha, India.
                            <br />
                            Landmark - Jenari Gacha Ramchandi Temple.</p>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default About;
