import React from 'react';
import './parkOPT.css';

const ParkOPT = () => {

    const widgetsData = [
        { id: 1, name: 'Car', icon: '🚗', link: '/car' },
        { id: 2, name: 'Truck', icon: '🚚', link: '/truck' },
        { id: 3, name: 'Motorcycle', icon: '🏍', link: '/motorcycle' },
        { id: 4, name: 'Bus', icon: '🚌', link: '/bus' }
    ];

    return (
        <div>
            <h1>
                Enter the Time Duration
            </h1>
            <div className="time-duration-container">
                <div className="input-group">
                    <label htmlFor="fromTime" className="input-label">From</label>
                    <input type="text" id="fromTime" className="time-input" placeholder="HH:MM:SS" />
                </div>
                <div className="input-group">
                    <label htmlFor="startTime" className="input-label">To</label>
                    <input type="text" id="startTime" className="time-input" placeholder="HH:MM:SS" />

                </div>
                <button className="orange-button">Check Availability</button>
            </div>
            <h1>
                Select Your Vehicle
            </h1>
            <div className="widget-grid">
                {widgetsData.map(widget => (
                    <a key={widget.id} href={widget.link} className="widget-link">
                        <div className="widget">
                            <div className="widget-icon">{widget.icon}</div>
                            <div className="widget-name">{widget.name}</div>
                        </div>
                    </a>
                ))}
            </div>


        </div>
    );
}

export default ParkOPT;
