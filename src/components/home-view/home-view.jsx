import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeView = () => {
  return (
    <>
      <h1 className="text-center">Plant a tree</h1>
      <Row className="mt-5 justify-content-center">
        <Col sm={5}>
          <Link className="w-100 home-buttons btn btn-primary">
            <div className="button-content">
              <img
                className="button-image"
                width="60"
                height="60"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png"
                alt="marker--v1"
              />
              <span className="button-text">Use current location</span>
            </div>
          </Link>
        </Col>
        <Col sm={5}>
          <Link to="/map" className="w-100 home-buttons btn btn-primary">
            <div className="button-content">
              <img
                className="button-image"
                width="60"
                height="60"
                src="https://img.icons8.com/ios-filled/50/FFFFFF/map-marker--v1.png"
                alt="map-marker--v1"
              />
              <span className="button-text">Choose location from map</span>
            </div>
          </Link>
        </Col>
      </Row>
    </>
  );
};
