import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginView } from "../login-view/login-view";
import { Sidebar } from "../sidebar/sidebar";
// import { NavigationBar } from "../navigation-bar/navigation-bar";
import { HomeView } from "../home-view/home-view";
import { MapView } from "../map-view/map-view";
import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import "bootstrap/js/dist/dropdown";

// remember to save Mapbox key as variable

export const MainView = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749, // SF latitude
    longitude: -122.4194, // SF longitude
    zoom: 12, // Zoom for SF
  });

  const handleViewportChange = (newViewport) => {
    setViewport(newViewport);
  };

  return (
    <BrowserRouter>
      <div
        className="container-fluid"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          padding: 0,
        }}
      >
        {/* <div className="row"> */}
        {/* <Col style={{ padding: 0 }} sm={2}>
            <Sidebar />
          </Col> */}
        <div style={{ position: "absolute", zIndex: 10 }}>
          <Sidebar />
        </div>

        {/* <NavigationBar /> */}
        {/* <Col style={{ padding: 0 }} sm={10}> */}
        <Routes>
          <Route
            path="/"
            element={
              <MapView />
              // <div style={{ width: "100%", height: "100%" }}>
              //   <ReactMapGL
              //     mapboxApiAccessToken="pk.eyJ1IjoicmFlZGF3bmxhdyIsImEiOiJjbGozMnRlMmoxaWdwM2V1dTI1OXE3djN3In0.Yv7jHogURr0wDVNobpeRiw"
              //     width="100%"
              //     height="100%"
              //     {...viewport}
              //     onViewportChange={handleViewportChange}
              //     mapStyle={
              //       "mapbox://styles/raedawnlaw/clj7q5u3m00a001nw8arocm3y"
              //     }
              //   />
              // </div>
            }
          />
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
        {/* </Col> */}
        {/* </div> */}

        {/* <footer className="footer">
          Icons by
          <a href="https://icons8.com"> Icons8</a>.
        </footer> */}
      </div>
    </BrowserRouter>
  );
};
