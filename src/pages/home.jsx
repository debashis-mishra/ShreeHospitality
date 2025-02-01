import About from "../components/About";
import Hotels from "../components/hotels";
import Footer from "../components/footer";
import styled from "styled-components";

import "./home.css";

const WelcomeText = styled.h1`
  font-family: "Playwrite VN", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const HotelText = styled.h1`
  font-family: "Shadows Into Light", serif;
  font-weight: 400;
  font-style: normal;
`;

export default function Home() {
  return (
    <div className="home-container">
      {/* Banner */}
      <header className="hero">
        <WelcomeText>Welcome to</WelcomeText>
        <HotelText>Shree Hospitality</HotelText>
        <p>Experience luxury and comfort like never before.</p>
      </header>

      {/* About, Contact, Address Section */}
      <About />

      {/* Hotels */}
      <Hotels />

      {/* Footer */}
      <Footer />
    </div>
  );
}
