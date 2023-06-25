import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginView } from "../login-view/login-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { HomeView } from "../home-view/home-view";
import { MapView } from "../map-view/map-view";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import ReactMapGL from "react-map-gl";

export const MainView = () => {
  const [lng, setLng] = useState(-122.4194); // SF longitude
  const [lat, setLat] = useState(37.7749); // SF latitude
  const [zoom, setZoom] = useState(12); // Zoom for SF

  return (
    <BrowserRouter>
      <NavigationBar />
      {/* <Container className="content-container"> */}
      <Routes>
        <Route path="/" element={<MapView />} />
        <Route
          path="/login"
          element={
            <Row className="justify-content-md-center align-items-center mt-5">
              <Col sm={5}>
                <Card className="p-3">
                  <Card.Body>
                    <LoginView />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          }
        />
      </Routes>
      <footer className="footer">
        Icons by
        <a href="https://icons8.com"> Icons8</a>.
      </footer>
      {/* </Container> */}
    </BrowserRouter>
  );
};
