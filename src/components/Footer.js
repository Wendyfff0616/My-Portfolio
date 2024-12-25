import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';

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
                            <a href="#linkedin"><img src={navIcon1} alt="LinkedIn"/></a>
                            <a href="#behance"><img src={navIcon1} alt="Behance"/></a>
                            <a href="#email"><img src={navIcon1} alt="Email"/></a>
                        </div>
                        <p>CopyRight 2024. Wendy Fan. All Right Reserved </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}