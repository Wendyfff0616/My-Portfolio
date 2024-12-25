import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.svg";
import github from '../assets/img/github.svg';
import behance from '../assets/img/behance.svg';
import linkedin from '../assets/img/linkedin.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social-icon'>
                            <a href="#github"><img src={github} alt="Github"/></a>
                            <a href="#behance"><img src={behance} alt="Behance"/></a>
                            <a href="#linkedin"><img src={linkedin} alt="Linkedin"/></a>
                        </div>
                        <p>CopyRight 2024. Wendy Fan. All Right Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}