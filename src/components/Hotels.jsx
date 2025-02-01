import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import hotel1 from "../assets/room-gallery/8.jpg";
import hotel2 from "../assets/hotel-2-thumbnail.jpg";
import "./hotels.css";

const BookButton = styled.button`
  flex: 1;
  padding: 0.6rem 1rem;
  background: #00a300;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background: #007500;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.98);
  }

  /* Accessibility for buttons */
  &:focus {
    outline: 2px solid #007500;
    outline-offset: 2px;
  }
`;

const BlueButtons = styled.button`
  flex: 1;
  padding: 0.6rem 1rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #0056b3;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  /* Accessibility for buttons */
  &:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }
`;

export default function Hotels() {
  const navigate = useNavigate();

  const hotels = [
    { id: "1", name: "Bali Ghara", price: "Rs X", thumbnail: hotel1 },
    // { id: "2", name: "Hotel B", price: "Rs Y", thumbnail: hotel2 },
  ];

  const handleGalleryClick = (id, comingSoon) => {
    if (!comingSoon) {
      navigate(`/hotelDetails/${id}`);
    }
  };

  const handleViewOnMap = () => {
    window.open("https://www.google.com/maps/place/Bali+Ghara/@19.8049739,85.8236448,625m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a19c540966fea99:0x69e5fa56660808d9!8m2!3d19.8049739!4d85.8236448!16s%2Fg%2F11lyrbdzzx?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D", "_blank");
  };

  const handleBookNow = (id) => {
    navigate(`/book/hotel/${id}`);
  };

  return (
    <section className="hotels">
      {hotels.map((hotel) => (
        <div key={hotel.id} className={`hotel-card ${hotel.comingSoon ? "blurred" : ""}`}>

          {/* Coming Soon Label */}
          {hotel.comingSoon && <div className="coming-soon-banner">Coming Soon</div>}

          <div className="hotel-image-container">
            <img src={hotel.thumbnail} alt={hotel.name} />
          </div>

          <h2>{hotel.name}</h2>
          {/* <p>Starting at {hotel.price} per night.</p> */}

          <div className="hotel-buttons">
            <BlueButtons onClick={() => handleGalleryClick(hotel.id, hotel.comingSoon)} disabled={hotel.comingSoon}>
              Gallery
            </BlueButtons>
            <BlueButtons onClick={handleViewOnMap} disabled={hotel.comingSoon}>
              View on Map
            </BlueButtons>
          </div>
        </div>
      ))}
    </section>
  );
}
