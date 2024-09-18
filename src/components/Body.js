import React from 'react'

function Body() {
    return (
        <>
            <nav>
                <div id="home">
                    <div className="profile_name">
                        Jane Doe
                        <div className="contact_info">
                            <img src="html_finalprojimages/envelope.png" alt="https://icons8.com/icon/124377/circled-envelope" />
                            jdoe@jeemail.com
                        </div>
                        {/* <div style="clear:both;"></div> */}
                        <div className="contact_info">
                            <img src="html_finalprojimages/phone.png" alt="https://icons8.com/icon/124377/circled-envelope" />
                            +13456764598

                        </div>
                    </div>
                    <div className="topdiv">
                        <a className="topmenu" href="#about-me">About Me</a>

                    </div>
                </div>
            </nav>
            <section id="about-me" className="container">
                <div>
                    <img src="https://miro.medium.com/max/1400/1*qdAW1TjCN57h1lbuuzvchg.gif" className="profile_image" />
                </div>

                <div>
                    <h1>
                        Hi, I'm Jane Doe! <img src="html_finalprojimages/waving-hand.png" width="60px" />
                    </h1>
                    <p>
                        I am a full stack developer with 2 years of experience in both application and presentation layers.
                        I have worked on applications and microservices deployed on IBM Cloud.
                        I am an avid user of IBM Watson Services and have worked on Watson Assistant, NLU, Sentiment analyzer to name a few.
                    </p>
                </div>
            </section>

            <section id="skills">
                <h2>Skills</h2>
                {/* <div style="clear:both;"></div> */}

                <div className="all_skills">
                    <div className="skill">
                        <img src="html_finalprojimages/html5.png" />
                        <h6>HTML</h6>
                        <p>2 years experience</p>
                    </div>

                    <div className="skill">
                        <img src="html_finalprojimages/js.jpeg" />
                        <h6>JavaScript</h6>
                        <p>3 years experience</p>
                    </div>
                </div>
            </section>

            <section className="projects" id="projects">
                <h2>
                    Projects
                </h2>
                {/* <div style="clear:both;"></div> */}

                <div id="projects-container" className="projects-container">
                    <div className="project-card">
                        <h3>Chatbot</h3>
                        <ul>
                            <li>Developed a secure website integrated with chatbot for an automobile client using HTML, CSS, JavaScript and IBM Watson Assistant</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Sentiment Analyzer</h3>
                        <ul>
                            <li>Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU</li>
                        </ul>
                    </div>

                    <div className="project-card">
                        <h3>Fashion Website</h3>
                        <ul>
                            <li>Created a styled multi-page website for a new player in the fashion industry and integrated it with a shopping cart, using stripe for payment gateway</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <div style="clear:both;"></div> */}
            {/* Recommendation Form  */}
            <section id="recommendations">
                <h2>Recommendations</h2>
                {/* <div style="clear:both;"></div> */}
                <div className="all_recommendations" id="all_recommendations">
                    <div className="recommendation">
                        <span>&#8220;</span>
                        Jane is a very quick learner and quickly grasps key concepts of Web development.
                        She got a great attitude & she is an excellent team player.
                        She has a curious mind and asks the right question.
                        She takes initiative within a team and has potentials to lead the team.
                        <span>&#8221;</span>
                    </div>
                    <div className="recommendation">
                        <span>&#8220;</span>
                        Working with Jane has been an awesome experience.
                        She is highly knowledgable and always goes the extra step to make sure everything is right.
                        For any future projects that need her expertise I would definitely want to work with her again.
                        <span>&#8221;</span>
                    </div>
                    <div className="recommendation">
                        <span>&#8220;</span>
                        I had worked along with Jane during the initial phase of our venture which needed Web development.
                        She is a committed resource who has in depth knowledge about the domain.
                        She will be an asset for any organisation!
                        <span>&#8221;</span>
                    </div>
                </div>
            </section>
            <div className="iconbutton">
                <a href="#home">

                </a>
            </div>
            <div id="popup" className="flex_center popup">
                <img src="html_finalprojimages/checkmark--outline.svg" />
                {/* <h3><!-- Add appropriate text here--></h3> */}
                <button onclick="showPopup(false)">Ok</button>
            </div>
        </>
    )
}
export default Body;