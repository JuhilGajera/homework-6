import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
            <footer style={{display:'flex',width:'100%',backgroundColor:'gray',height:160}}>
                <section style={{ width: '33%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
                    <h2>Section 1</h2>
                    <p>Content for section 1.</p>
                </section>
                <section style={{ width: '33%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
                    <h2>Section 2</h2>
                    <p>Content for section 2.</p>
                </section>
                <section style={{ width: '33%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
                    <h2>Section 3</h2>
                    <p>Content for section 3.</p>
                </section>
            </footer>
    )
}
