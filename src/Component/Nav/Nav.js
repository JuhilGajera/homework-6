import './Nav.css';

function Nav() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='nav'>
                    <div className='Left'>
                        Logo
                    </div>
                    <div className='Right'>
                        <ul style={{ display: 'flex', justifyContent: 'space-evenly', margin: 0 }}>
                            <a to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
                            <a to="/Product" style={{ color: 'white', textDecoration: 'none' }}>Product</a>
                            <a to="/AddtoCart" style={{ color: 'white', textDecoration: 'none' }}>Add to cart</a>
                        </ul>
                    </div>
                </div>
            </header >

        </div >
    );
}

export default Nav;
