import  { useState } from 'react';
import '../index.css';

function SignIn() {
    const [contact, setContact] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otp, setOtp] = useState('');

    const handleSendOtp = () => {
        // Simulate sending OTP
        console.log(`Sending OTP to ${contact}`);
        setOtpSent(true);
    };

    const handleVerifyOtp = () => {
        // Simulate verifying OTP
        console.log(`Verifying OTP: ${otp}`);
        alert('OTP Verified!');
    };

    return (
        <div className="signin-container">
            <h1>Sign In</h1>
            {!otpSent ? (
                <div>
                    <input
                        type="text"
                        placeholder="Enter Phone Number or Email"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />
                    <button onClick={handleSendOtp}>Send OTP</button>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </div>
            )}
        </div>
    );
}

export default SignIn;