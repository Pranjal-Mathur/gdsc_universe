import "./Earth.css";

const Earth = ()=>{

    return(
        <div className="earth-content">
            

            <div className="earth-desc">
                <div className="earth-desc-box1">

                <p className="t1">3.Earth</p><br/>
                <p className="t2">Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.</p>

                </div>
                <div className="earth-desc-box2">
                        <div className="card2">

                        <div className="card-logo">
                            <div className="logo-box">
                            <img src="../../src/assets/l1.png"/>
                            </div>
                        </div>
                        <div className="card-desc">
                            <div className="desc-text">
                                <p className="font1">Distance</p>
                                <p className="font2">7918,<br/>Miles</p>
                                </div>
                        </div>



                        </div>
                </div>
                
            </div>


         
            <div className="earth-main">
                <img src="../../src/assets/earth.png"/>
                <div className="earth-rocket">
                    <img src="../../src/assets/earth-rocket.png"/>
                </div>
                <div className="arrow1">
                    <img src="../../src/assets/arrow1.png"/>
                </div>
                <div className="planet-desc">
                    <p id="moon-head">Moon Planet</p><br/>
                    <p>Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.</p>
                </div>
                
            </div>
           
        </div>
    )


}

export default Earth;