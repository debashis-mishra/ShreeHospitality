// import React from 'react';
import '../index.css';

function AdminDashboard() {
    return (
        <div className="admin-dashboard-container">
            <h1>Admin Dashboard</h1>
            <p>Manage rooms, prices, and view bookings:</p>

            <div className="admin-section">
                <h2>Manage Rooms</h2>
                <button>Add Room</button>
                <button>Remove Room</button>
            </div>

            <div className="admin-section">
                <h2>Manage Prices</h2>
                <button>Update Prices</button>
            </div>

            <div className="admin-section">
                <h2>View Bookings</h2>
                <ul>
                    <li>Booking #1: Room 2 - John Doe</li>
                    <li>Booking #2: Room 1 - Jane Smith</li>
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;