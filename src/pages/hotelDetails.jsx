import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./hotelDetails.css";

export default function HotelDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [images, setImages] = useState([]);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const hotelName = id === "1" ? "Bali Ghara" : id === "2" ? "Hotel B" : "Unknown Hotel";

    useEffect(() => {
        const fetchImages = async () => {
            const imageModules = import.meta.glob(`../assets/room-gallery/*.jpg`);
            const imagePaths = await Promise.all(
                Object.keys(imageModules).map(async (path) => {
                    const module = await imageModules[path]();
                    return module.default;
                })
            );
            setImages(imagePaths);
        };

        fetchImages();
    }, [id]);

    const handleBooking = () => {
        if (selectedRoom) {
            navigate(`/book/hotel/${id}`);
        } else {
            alert("Please select a room to book.");
        }
    };

    return (
        <div className="hotel-details-container">
            <h1>{hotelName}</h1>
            {/* <p>Choose a room that suits your needs:</p> */}

            <h2>Gallery</h2>
            <div className="room-gallery">
                {images.length > 0 ? (
                    images.map((imgSrc, index) => (
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`Room ${index + 1}`}
                            className="gallery-image"
                            onClick={() => setFullscreenImage(imgSrc)}
                        />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>

            {/* <button onClick={handleBooking} className="book-now-btn">
                Book Now
            </button> */}

            {fullscreenImage && (
                <div className="fullscreen-overlay" onClick={() => setFullscreenImage(null)}>
                    <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
                </div>
            )}
        </div>
    );
}
