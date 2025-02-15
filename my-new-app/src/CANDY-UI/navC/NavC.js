import React from "react";
// import Candyui from "../../App";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import img1 from "../../assests/Saly-10.png";
import img2 from "../../assests/BD - Image.png";
import img3 from "../../assests/DEV - Image.png";
import img4 from "../../assests/PI - Image.png";
import img5 from "../../assests/RowT.png";
import img6 from "../../assests/RowB.png";
import "./NavC.css";
export default function NavC(){
    return(
        <>
          <div className="navbarC">
  <Navbar className="navbar-custom" expand="lg">
    <Navbar.Brand className="brand-text">Candy</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="collapseC">
      <Nav className="mr-auto" style={{ gap: 20 }}>
        <Nav.Link className="nav-link">Home</Nav.Link>
        <Nav.Link className="nav-link">Services</Nav.Link>
        <Nav.Link className="nav-link">Contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
            </div>


            <div className="firstpart">
            <div className="part1">
                <h1>Candy is a global branding and UX design agency</h1>
                <p>Elevate tour online peresence with candy expert design, Development and presentation services bring your project to fruition. </p>
                <Button>Get Strated Now</Button>
            </div>
            <div className="part2">
                <img src={img1} alt=""/>
                
            </div>
            </div>


            <div className="bdev">
                <div className="bd-1">
                    <p>IDENTITY</p>
                    <h1>Branding</h1>
                    <p>Working hand and hand with you, Candy speciatializes in sculpting unique brand identities that set you a part in the market. Whether its crafing logos or defining brand elements, rely on our expertise to creat a refined and memorable brand image online.</p>
                    <Button>Learn Now</Button>

                </div>
                <div
                className="bd-2">
                    <img src={img2} alt=""></img>
                </div>

            </div>

            <div id="design">
                <div>
                    <img src={img3} alt=""></img>
                </div>
                <div>
                    <p>CRAFT</p>
                    <h1>Design</h1>
                    <p>Collaborating closely with you, Candy excels in designing captivating visual identities that differentiate you in the market. Whether it's crafting stunning graphics or conceptualising website aesthetics, trust our expertise to curate a polished and unforgettable design language for your brand</p>
                    <Button>Learn More</Button>
                </div>
            </div>
            {/* //Development part */}
            <div className="bdev">
                <div className="bd-1">
                    <p>MAKE</p>
                    <h1>DEVELOPMENT</h1>
                    <p>At Candy, our seasoned team possesses the know-how and proficiency to transform your idea into reality. Utilising cutting-edge technologies and industry best practices, we guarantee that your project is not only functional and scalable but also secure and user-centric.</p>
                    <Button>Learn More</Button>
                </div>
                <div className="bd-2">
                    <img src={img4} alt=""></img>
                </div>

            </div>



            {/* brains behind operation */}
            <div className="bdev">
                <div>
                    <p>OUR TEAM</p>
                    <h1>The Brains Behind Operations</h1>
                    <p>At Candy, we take pride in our accomplished and diverse team of specialists committed to empowering founders to thrive in the digital realm.
                    Our team comprises adept project managers, versatile developers, innovative designers, and visionary artists, each boasting a demonstrated history of success in the field.</p>
                    <Button>More About Us</Button>
                </div>
                <div>
                    <img src={img5} alt='' />
                    <img src={img6} alt=""/>
                </div>
            </div>


            {/* word of the  */}

            <div className="word">
                <p>WORD OF THE PEOPLE</p>
                <h1>Here;s what People Have To Say Regarding Our Services.</h1>
                <div id="cards">
                <div>
                    <h4>Clarie Dunphy</h4>
                    <p>CEO of YAP</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at metus eu nisi cursus ultrices vel eu lectus. Nullam nec aliquam felis. Vivamus faucibus condimentum scelerisque. Mauris gravida magna nec neque euismod pretium.

Praesent quis justo erat. Sed accumsan maximus consequat. Maecenas gravida quam enim, nec facilisis nisi commodo sit amet. </p>
                </div>
                <div>
                    <h4>Clarie Dunphy</h4>
                    <p>CEO of YAP</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at metus eu nisi cursus ultrices vel eu lectus. Nullam nec aliquam felis. Vivamus faucibus condimentum scelerisque. Mauris gravida magna nec neque euismod pretium.</p>

                </div>
                <div>
                    <h4>Clarie Dunphy</h4>
                    <p>CEO of YAP</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at metus eu nisi cursus ultrices vel eu lectus. Nullam nec aliquam felis. Vivamus faucibus condimentum scelerisque. Mauris gravida magna nec neque euismod pretium.</p>

                </div>
                </div>
            </div>


            <div id="ready">
                <div className="ready1">
                    <p>READY TO TAKE YOUR PROJECT TO THE NEXT LEVEL WITH?</p>
                    <h1>Get in touch with us today to discuss about your project and discover how we can assist you in crafing,building, and presenting a reputable online brand.

                    </h1>
                    <p>we'll get back to you as soon as possible to schedule a consultation and discuss how we can support your project</p>
                </div>
                <div className="form">
                    <input type="text" placeholder="John Doe"></input>
                    <input type="text" placeholder="Mail@example.com"></input><br></br><br></br>
                    <input type="text" placeholder="Type here" className="textarea"></input><br></br><br></br>
                    <button>Send Message</button>
                </div>
            </div>


            <div className="footerpage">
                <div className="footer1">
                    <h2>About</h2>
                    <p>As a founder seeking web design solutions. you're familiar with the challanges of project resalisation.The path to success can be challenging.spanning the search for experienced talent to navigating project delays and budgetary constraints.</p>
                    <a href="#">@2024 Candy.All Rights Reserved</a>
                </div>
                <div className="footer2">
                    <h2>PAGES FOR YOU</h2>
                    <p>Explore our pages.</p>
                    <a href="#">home</a>
                    <a href="#">About</a>
                    <a href="#">Contacts</a>
                    {/* <a href="#">Design</a>
                    <a href="#">Development</a>
                    <a href="#">Pitch Decks</a> */}

                </div>
                <div className="footer3">
                    <h2>Connect with us</h2>
                    <p> here are the official links to our social media platform.feel free to reach out to us through any of the following links below</p>
                </div>
            </div>
        </>
    )

}