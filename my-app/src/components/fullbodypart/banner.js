import './banner.css'
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
// import Button from 'react-bootstrap/Button';




function Fullbody(){
    return(
        <div>
            <div id="ban">
                <div id="ban-left">
                    <h1>
                    Landing page template for developers & startups
                    </h1>
                    <p>
                    Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.
                    </p>
                   <div id="btns">
                   <button id="btn1">Explore</button>
                   <button id="btn2">Learn more</button>
                   </div>

                </div>
                <div id="ban-right">
                    <img src="https://landy-web.netlify.app/img/svg/developer.svg" alt=""></img>
                </div>


            </div>
            <div id="intro">
                <h1>Introduce your product quickly & effectively</h1>
                <p>Landy comes with multi-lingual support, all of the content is stored in the JSON files, so that you can manage the texts without having any prior knowledge in developing web applications using React.js.</p>
                <button>Get Started</button>

            </div>


            <div id="light">
                <div id="l-left">
                    <img src="	https://landy-web.netlify.app/img/svg/graphs.svg" alt=""></img>
                </div>
                <div id="l-right">
                    <h1>Light, fast & responsive</h1>
                    <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
                    <div id="why">
                        <div>
                        <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""></img>
                        <p class="r1">Why Antd?</p>
                        <p>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</p>
                    </div>
                    <div>
                        <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""></img>
                        <p class="r1">Why styled-components?</p>
                        <p>Styled Components gives you total control over your components.</p>
                    </div>
                    </div>
                </div>

            </div>

            <div class="ready">
            <div id="Ready-left">
                <h1>Ready made sections</h1>
                <p>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
            </div>
            <img src="https://landy-web.netlify.app/img/svg/product-launch.svg" alt="" class="Readyimg"></img>
                
            </div>

            <div class="that"> 
                <img src="https://landy-web.netlify.app/img/svg/waving.svg" alt=""></img>
                <div id="">
                <h1>That's about it!</h1>
                <p>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
            </div>

            </div>

            <div id="contactinfo">
                <div id="c-left">
                    <h1>Contact form</h1>
                    <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
                </div>
                <div id="c-form">
                    <form>
                        <label for="">Name</label> <br></br>
                        <input type="text" placeholder='Your Name'></input> <br></br>
                        <label for="">Email</label><br></br>
                        <input type="emial" placeholder='Your Email'></input><br></br>
                        <label for="">Message</label><br></br>
                        <input type="text" placeholder='Your Message' id="msg"></input><br></br>
                        <button>Submit</button>
                    </form>
                </div>

            </div>

            <div id="footer">
                <div id="part1">
                    <div><h2>Contact</h2>
                    <p>Tell us everything
                    </p>
                    <p>Do you have any question? Feel free to reach out.</p>
                    <h3>Let's Chat</h3></div>

                    <div>
                       <h2>Address</h2>
                       <p>Rancho Santa Margarita
                        2131 Elk Street
                                California</p>
                        
                    </div>
                </div>
                <div id="part2">
                    <div>
                        <h2>Policy</h2>
                        <p>Application Security</p>
                        <p>Software Principles</p>
                    </div>
                    <div>
                        <h2>Company</h2>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Press</p>
                        <p>Careers & Culture</p>


                    </div>
                </div>
                <div id="part3">
                    <div>
                        {/* <h2></h2> */}
                        <p>Support Center</p>
                        <p>Customer Support</p>
                        
            
                    </div>
                    <div>
                        <h2>Language</h2>

                    </div>
                </div>

            </div>
            <hr></hr>
            <div id="footer2">
                <h1>Landy</h1>
                
                <FaGithub></FaGithub>
                <FaTwitter></FaTwitter>
                <FaLinkedin></FaLinkedin>
                <FaMedium></FaMedium>
                

             <button>Buy me a coffee</button> 
                 
               
            </div>

        </div>
    )
}
export {Fullbody};