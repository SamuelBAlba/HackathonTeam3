import { Link } from 'react-router-dom'
import React from 'react'

export default function Home() {
    return (
        <>
            <div className='container'>
                <Link to={`//`}>
                    <h1 className='header'>What is our app about?</h1>

                    <h1 className='header'>How recycling can help the planet</h1>
                </Link>
            </div>
        </>
    )

}
