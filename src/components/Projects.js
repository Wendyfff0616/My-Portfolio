import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img-circuit.jpg"
import projImg2 from "../assets/img/project-img-cat.jpg"
import projImg3 from "../assets/img/project-img-mine.jpg"
import projImg4 from "../assets/img/project-img-inkball.jpg"
import projImg5 from "../assets/img/project-img-login.jpg"
import projImg6 from "../assets/img/project-img-portfolio.jpg"
import projImg21 from "../assets/img/project-img-film.jpg"
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {

    const projects1 = [
        {
            title: "My portfolio",
            description: "React, Animated CSS",
            imgUrl: projImg6,
            url: 'https://github.com/Wendyfff0616/My-Portfolio',
        },
        {
            title: "Login and Registration System",
            description: "JSP, Servlet, JDBC, MySQL",
            imgUrl: projImg5,
            url: 'https://github.com/Wendyfff0616/Login-and-Registration-System',
        },
        {
            title: "Inkball",
            description: "Java, Processing",
            imgUrl: projImg4,
            url: 'https://github.com/Wendyfff0616/Inkball',
        },
        {
            title: "Minesweeper",
            description: "Java, Processing",
            imgUrl: projImg3,
            url: 'https://github.com/Wendyfff0616/Minesweeper',
        },
        {
            title: "FlappyCat",
            description: "Python, Pygame",
            imgUrl: projImg2,
            url: 'https://github.com/Wendyfff0616/FlappyCat',
        },
        {
            title: "Photonic-Circuit",
            description: "Python",
            imgUrl: projImg1,
            url: 'https://github.com/Wendyfff0616/Photonic-Circuit',
        }
    ];
    const projects2 = [
        {
            title: "Film-Bridge",
            description: "Figma, UI/UX Design",
            imgUrl: projImg21,
            url: 'https://www.behance.net/gallery/212820631/Film-Bridge-UIUX-Design-Project',
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <h2>Projects</h2>
                            <p>These are my projects.</p>
                        </div>}
                    </TrackVisibility>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Computer Science</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third">Others</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                        
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className="text-center">
                                    <Row className="justify-content-center">
                                        {/* Map through the projects array to render each project */}
                                        {
                                            projects1.map((project1, index) => {
                                                return (
                                                    <ProjectCard 
                                                    // Key is required by React for list rendering optimization
                                                    key={index}
                                                    // Spread operator: passes all properties of the project object as props
                                                    {...project1}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second" className="text-center">
                                <Row className="justify-content-center">
                                        {/* Map through the projects array to render each project */}
                                        {
                                            projects2.map((project1, index) => {
                                                return (
                                                    <ProjectCard 
                                                    // Key is required by React for list rendering optimization
                                                    key={index}
                                                    // Spread operator: passes all properties of the project object as props
                                                    {...project1}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
{/* 
                                <Tab.Pane eventKey="third" className="text-center"></Tab.Pane> */}
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}