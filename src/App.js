import React from 'react'
import './App.css';
import './styles.css'
import python from './assets/img/python.png'
import js from './assets/img/js.png'
import tensorflow from './assets/img/tensorflow.png'
import pytorch from './assets/img/pytorch.png'
import react from './assets/img/react3.png'
import ts from './assets/img/ts.png'
import node from './assets/img/nodejs.png'
import redux from './assets/img/redux.png'
import graphql from './assets/img/graphql.png'
import fourLeggedRobot from './assets/img/portfolio/4_legged_robot.jpg'
import faceDetection from './assets/img/portfolio/face-recognition.png'
import ea from './assets/img/portfolio/ea.png'
import modelPart from './assets/img/portfolio/model.png'
import musicApp from './assets/img/portfolio/musicApp2.png'
import chiaho from './assets/img/team/chiaho3.jpg'
import closeIcon from './assets/img/close-icon.svg'
import modelSpec from './assets/img/portfolio/model_and_spec.png'
import faceDetectionLg from './assets/img/portfolio/face-recognition_2.png'
import $ from 'jquery';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
              aria-label="Toggle navigation">
              Menu
          <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Passion</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* header */}
        <header class="masthead">
          <div class="container">
            <div class="masthead-subheading">Welcome To My Website!</div>
            <div class="masthead-heading text-uppercase">Chia-Ho Hsiung</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Learn More About Me</a>
          </div>
        </header>
        {/* services */}
        <section class="page-section" id="services">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Passion</h2>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-brain fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Machine Learning</h4>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Programming</h4>

              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-music fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">Music</h4>

              </div>
            </div>
          </div>
        </section>

        <section class="page-section bg-light" id="portfolio">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Portfolio</h2>
            </div>
            <div class="row">
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={faceDetection} alt="" />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Face Detection App</div>
                    <div class="portfolio-caption-subheading text-muted">Front-end Development</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={musicApp} alt="" />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Music Tutorial App</div>
                    <div class="portfolio-caption-subheading text-muted">Front-end Development</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={modelPart} alt="" />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Source Separation of Two Guitars</div>
                    <div class="portfolio-caption-subheading text-muted">Machine Learning, MIR</div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={fourLeggedRobot} alt="" />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Four Legged Robot</div>
                    <div class="portfolio-caption-subheading text-muted">Robotics, Simulation</div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={ea} alt="" />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Evolutionary Robotics</div>
                    <div class="portfolio-caption-subheading text-muted">Evolutionary Algorithms, Robotics</div>

                  </div>
                </div>
              </div>
              {/* <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                    <div class="portfolio-hover">
                      <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img class="img-fluid" src={ea} alt="" />
                  </a>
                  <div class="portfolio-caption">
                    <div class="portfolio-caption-heading">Evolutionary Robotics</div>
                    <div class="portfolio-caption-subheading text-muted">Evolutionary Algorithms, Robotics</div>

                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section class="page-section" id='SKILLS'>
          <div class="container">
            <div class="text-center">
              <h2 style={{ color: "white" }} class="section-heading text-uppercase">SKILLS</h2>
            </div>
          </div>
          <div class="container">
            <img class='skill_icon' alt='js' src={js} width='220' height="auto" />
            <img class='skill_icon' alt='ts' src={ts} width='220' height="auto" />
            <img class='skill_icon' alt='react' src={react} width='220' height="auto" />
            <img class='skill_icon' alt='redux' src={redux} width='220' height="auto" />
            <img class='skill_icon' alt='node' src={node} width='220' height="auto" />
            <img class='skill_icon' alt='graphql' src={graphql} width='220' height="auto" />

            <img class='skill_icon' alt='python' src={python} width='220' height="auto" />

            <img class='skill_icon' alt='tensorflow' src={tensorflow} width='220' height="auto" />
            <img class='skill_icon' alt='pytorch' src={pytorch} width='220' height="auto" />

          </div>
        </section>

        <section class="page-section bg-light" id="about">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">ABOUT ME</h2>
            </div>
            <div class="team-member">
              <img class="mx-auto rounded-circle" src={chiaho} alt="" />
              <h4>Chia-Ho Hsiung</h4>
              <p class="text-muted">Front-end Developer, Music and Machine Learning Enthusiast</p>
              <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="https://github.com/chiahohsiung" target="_blank"><i
                class="fab fa-github"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/chiahohsiung/" target="_blank"><i
                class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <p class="large text-muted">I am Chia-Ho Hsiung. I love sharing my ideas by building interactive websites.</p>
            </div>
          </div>
          {/* </div> */}
        </section>

        <section class="page-section" id="contact">
          <div class="container">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">Contact Me</h2>
            </div>
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
              <div class="row align-items-stretch mb-5">
                <div class="col-md-6">
                  <div class="form-group">
                    <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required"
                      data-validation-required-message="Please enter your name." />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required"
                      data-validation-required-message="Please enter your email address." />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group mb-md-0">
                    <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"
                      data-validation-required-message="Please enter your phone number." />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group form-group-textarea mb-md-0">
                    <textarea class="form-control" id="message" placeholder="Your Message *" required="required"
                      data-validation-required-message="Please enter a message."></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <div id="success"></div>
                <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send
            Message</button>
              </div>
            </form>
          </div>
        </section>

        <footer class="footer py-4">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
              <div class="col-lg-4 my-3 my-lg-0">
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
              </div>
              <div class="col-lg-4 text-lg-right">
                <a class="mr-3" href="#!">Privacy Policy</a>
                <a href="#!">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>

        <div class="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src={closeIcon} alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="portfolio_title text-uppercase">Four-Legged Robot</h2>
                      <img class="img-fluid d-block mx-auto" src={fourLeggedRobot} alt="" />
                      <p>I built a four-legged robot from scratch from designing, manufacturing to programming! Multiple
                      prototypes are designed with Solidworks, and tested in simulation using Python. To make the robot
                  walk, I employed various search algorithms to optimize the gait of the robot. </p>
                      <ul class="list-inline">
                        <li>Category: Robotics, Simulation</li>
                      </ul>
                      <a class="btn btn-dark btn-social mx-2"
                        href="https://github.com/chiahohsiung/Four-Legged-Robot-Simulation" target="_blank"><i
                          class="fab fa-github"></i></a>
                      <button class="btn btn-dark" data-dismiss="modal" type="button">
                        <i class="fas fa-times mr-1"></i>
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src={closeIcon} alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="portfolio_title text-uppercase">How To Improvise</h2>
                      <img class="img-fluid d-block mx-auto" src={musicApp} alt="" />
                      <p>As a guitarist, I always find improvisation exciting but challenging. In this application, I gave a introduction of how to improvise. I designed, developed, tested the application with React and Redux</p>
                      <ul class="list-inline">
                        <li>Category: Front-end Development, Music</li>
                      </ul>
                      <a class="btn btn-dark btn-social mx-2" href="https://github.com/chiahohsiung/Evolutionary-Robots"
                        target="_blank"><i class="fab fa-github"></i></a>
                      <button class="btn btn-dark" data-dismiss="modal" type="button">
                        <i class="fas fa-times mr-1"></i>
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src={closeIcon} alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">

                      <h2 class="portfolio_title text-uppercase">Source Separation of Two Guitars</h2>

                      <img class="img-fluid d-block mx-auto" src={modelSpec} alt="" />
                      <p>Separating the sounds of different instruments that compose a mixture has received great attention in
                      the signal processing society. Yet, the task of separating sounds generated by the same type of
                      instruments, e.g., the sounds of two guitars considered here, is much less explored. Such guitar
                      mixtures are common in pop/rock songs, so being able to separate them has useful downstream
                      applications. As the first attempt towards this task, we consider in this work sound mixtures of
                      various synthetic acoustic and electric guitar timbres. Moreover, we approach this task with a
                      score-informed setting, aiming to build a model that isolates out the sound source whose underlying
                      musical score is given, regardless of the timbre of this target sound source. In other words, the
                      model is built in a hope to be applicable to arbitrary guitar timbres, so as to deal with the rich
                      diversity in timbre seen in guitar music. Specifically, we develop a score-informed version of
                      Open-Unmix, and test its sensitivity to guitar timbre with five separation scenarios. This involves
                      the case of unseen guitar timbres, and the case when the two guitars in the mixture have exactly the
                  same timbre. Our experiments demonstrate the effectiveness of our design.</p>
                      <ul class="list-inline">
                        <li>Category: Machine Learning, MIR</li>
                      </ul>
                      <a class="btn btn-dark btn-social mx-2"
                        href="https://github.com/chiahohsiung/Score-Informed-SS-on-Guitars" target="_blank"><i
                          class="fab fa-github"></i></a>
                      <button class="btn btn-dark" data-dismiss="modal" type="button">
                        <i class="fas fa-times mr-1"></i>
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src={closeIcon} alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="portfolio_title text-uppercase">Evolutionary Robotics</h2>
                      <img class="img-fluid d-block mx-auto" src={ea} alt="" />
                      <p>Designing a robot is an open-ended problem. Instead of specifying the dimensions of a robot, I
                      employed evolutionary algorithms to let the machine generate arbitrarily-shaped robots with Python in
                      this project. In order to facilitate the evolutionary algorithms, I built a physics simulator to
                  integrate with my algorithms using Open3D. </p>
                      <ul class="list-inline">
                        <li>Category: Evolutionary Algorithms, Robotics</li>
                      </ul>
                      <a class="btn btn-dark btn-social mx-2" href="https://github.com/chiahohsiung/Evolutionary-Robots"
                        target="_blank"><i class="fab fa-github"></i></a>
                      <button class="btn btn-dark" data-dismiss="modal" type="button">
                        <i class="fas fa-times mr-1"></i>
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="close-modal" data-dismiss="modal"><img src={closeIcon} alt="Close modal" /></div>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <div class="modal-body">
                      <h2 class="text-uppercase portfolio_title">Face Recognition Application</h2>

                      <img class="img-fluid d-block mx-auto" src={faceDetectionLg} alt="" />
                      <p>I built a full stack application using React.js, Node.js, and Express.js to detect the faces in the
                      image uploaded by users with Computer Vision API. I used relational database PostgreSQL to store the
                  users' data. The application was deployed to cloud platform Heroku. <a class='app_link'
                          href='https://smart-lemon.herokuapp.com/' target="_blank">Give It A Try!</a></p>
                      <a class="btn btn-dark btn-social mx-2" href="https://github.com/chiahohsiung/face-recognition" give><i
                        class="fab fa-github"></i></a>
                      <button class="btn btn-dark" data-dismiss="modal" type="button">
                        <i class="fas fa-times mr-1"></i>
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div >


    );
  }
}

export default App;
