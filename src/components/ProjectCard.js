import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl, onClick, url }) => {
    const handleClick = () => {
        if (url) {
          window.open(url, '_blank');
        } else {
          onClick();
        }
      };

    return (
        <Col sm={6} md={4} onClick={handleClick}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}