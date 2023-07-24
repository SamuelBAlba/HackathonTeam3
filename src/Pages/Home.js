import { Link } from 'react-router-dom';
import React from 'react';

export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='hero-section'>
                    <h1 className='header'>Welcome to the Waste Wise App!</h1>
                    <p className='sub-header'>
                        Join us in making a difference for a greener tomorrow.
                    </p>
                </div>

                <div className='features-section'>
                    <h2 className='section-header'>What is our recycling app about?</h2>
                    <p>
                        Welcome to Waste Wise, where we believe that small actions can make
                        a big impact. Our app is all about promoting recycling, reducing
                        waste, and making eco-conscious choices. Let's work together to
                        create a cleaner, healthier planet for future generations.
                    </p>
                </div>

                <div className='testimonial-section'>
                    <h2 className='section-header'>What our users say</h2>
                    <div className='testimonial'>
                        <p className='testimonial-text'>
                            "I love using Waste Wise! It's user-friendly and has helped me
                            become more conscious of my recycling habits. Highly recommended!"
                        </p>
                        <p className='testimonial-user'>- Sarah Green</p>
                    </div>
                    <div className='testimonial'>
                        <p className='testimonial-text'>
                            "Getting my friends to get Waste Wise so it can inspire them like it inspired me to recycle. We are making a positive impact together!"
                        </p>
                        <p className='testimonial-user'>- John Sheafer</p>
                    </div>
                    <div className='testimonial'>
                        <p className='testimonial-text'>
                            "Waste Wise has made recycling fun and rewarding. I can't wait to earn points
                            for every item recycled, and it'll motivate me to recycle more!"
                        </p>
                        <p className='testimonial-user'>- Emily Smith</p>
                    </div>
                </div>
                <div className='benefits-section'>
                    <h2 className='section-header'>Why choose Waste Wise?</h2>
                    <ul>
                        <li>Learn about eco-friendly practices.</li>
                        <li>Discover local recycling centers.</li>
                        <li>Make a difference for a sustainable future.</li>
                        <li>Connect with like-minded individuals(Coming soon).</li>
                        <li>Track and earn rewards for recycling(Coming soon).</li>
                        <li>Petition locations in NYC that <strong>REALLY</strong> need more receptacles(Coming soon).</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
