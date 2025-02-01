import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './booking.css';

export default function Booking() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [roomData, setRoomData] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [numRooms, setNumRooms] = useState(1);
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [otpVerified, setOtpVerified] = useState(false);

    useEffect(() => {
        axios.get(`/api/hotel/${id}/rooms`)
            .then((response) => {
                console.log('API response:', response.data); // Debugging
                setRoomData(response.data);
            })
            .catch((error) => console.error('Error fetching room data:', error));
    }, [id]);


    const requestOTP = async () => {
        try {
            await axios.post('/api/request-otp', { phone });
            alert('OTP sent to your phone!');
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await axios.post('/api/verify-otp', { phone, otp });
            if (response.data.success) {
                setOtpVerified(true);
                alert('OTP verified! Booking confirmed.');
                handleBooking();
            } else {
                alert('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    const handleBooking = async () => {
        const bookingDetails = {
            hotelId: id,
            roomId: selectedRoom,
            numRooms,
            date,
            phone,
        };

        try {
            await axios.post('/api/book', bookingDetails);
            alert('Booking successful!');
            navigate('/bookingConfirmation');
        } catch (error) {
            console.error('Error confirming booking:', error);
        }
    };

    return (
        <div className="booking-container">
            <h1>Book Your Stay</h1>
            <div className="room-selection">
                <h2>Available Rooms</h2>
                {Array.isArray(roomData) && roomData.length > 0 ? (
                    roomData.map((room) => (
                        <div
                            key={room.id}
                            className={`room-card ${selectedRoom === room.id ? 'selected' : ''}`}
                            onClick={() => setSelectedRoom(room.id)}
                        >
                            <h3>{room.name}</h3>
                            <p>Price: Rs {room.price} / night</p>
                            <p>Available: {room.available ? 'Yes' : 'No'}</p>
                        </div>
                    ))
                ) : (
                    <p>No rooms available or data failed to load.</p>
                )}
            </div>

            <div className="booking-details">
                <label>
                    Number of Rooms:
                    <input
                        type="number"
                        min="1"
                        value={numRooms}
                        onChange={(e) => setNumRooms(e.target.value)}
                    />
                </label>
                <label>
                    Select Date:
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label>
                    Phone Number:
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>
                {!otpVerified ? (
                    <>
                        <button onClick={requestOTP}>Request OTP</button>
                        <label>
                            Enter OTP:
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                        </label>
                        <button onClick={verifyOTP}>Verify OTP</button>
                    </>
                ) : (
                    <button onClick={handleBooking}>Confirm Booking</button>
                )}
            </div>
        </div>
    );
}
