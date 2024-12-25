import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png"

export const Projects = () => {

    const projects1 = [
        {
            title: "My portfolio",
            description: "React, Animated CSS",
            imgUrl: projImg1,
        },
        {
            title: "Login and Registration System",
            description: "JSP, Servlet, JDBC, MySQL",
            imgUrl: projImg1,
        },
        {
            title: "Inkball",
            description: "Java, Processing",
            imgUrl: projImg1,
        },
        {
            title: "Minesweeper",
            description: "Java, Processing",
            imgUrl: projImg1,
        },
        {
            title: "FlappyCat",
            description: "Python, Pygame",
            imgUrl: projImg1,
        },
        {
            title: "Photonic-Circuit",
            description: "Python",
            imgUrl: projImg1,
        }
    ];
    const projects2 = [
        {
            title: "Film-Bridge",
            description: "Figma, UI/UX Design",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>These are my projects.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Computer Science</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Others</Nav.Link>
                                </Nav.Item>
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

                                <Tab.Pane eventKey="third" className="text-center"></Tab.Pane>
                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' src={colorSharp2}></img>
        </section>
    )
}