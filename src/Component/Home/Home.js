import React from 'react'
import './Home.css'
import img from '../../Assets/google.png'
export default function Home() {
    return (
        <div style={{ display: 'flex' }}>
            <div className='left'>
                <h1>Google</h1>
                <p style={{ textAlign: 'justify' }}>
                    lorem Ips incorrectly called this as the author of the document you are looking for in the document body.<br />
                </p>
                <p style={{ textAlign: 'justify' }}>
                    The company has since rapidly grown to offer a multitude of products and services beyond Google Search, many of which hold dominant market positions. These products address a wide range of use cases, including email (Gmail), navigation (Waze & Maps), cloud computing (Cloud), web browsing (Chrome), video sharing (YouTube), productivity (Workspace), operating systems (Android), cloud storage (Drive), language translation (Translate), photo storage (Photos), video calling (Meet), smart home (Nest), smartphones (Pixel), wearable technology (Pixel Watch & Fitbit), music streaming (YouTube Music), video on demand (YouTube TV), artificial intelligence (Google Assistant), machine learning APIs (TensorFlow), AI chips (TPU), and more. Discontinued Google products include gaming (Stadia), Glass, Google+, Reader, Play Music, Nexus, Hangouts, and Inbox by Gmail.
                </p>
            </div>
            <div className='right'>
                <img src={img} style={{height:'70%'}}/>
            </div>
        </div>
    )
}
