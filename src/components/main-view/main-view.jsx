import { Container, Col, Card, Row, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginView } from "../login-view/login-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { HomeView } from "../home-view/home-view";
import { MapView } from "../map-view/map-view";

export const MainView = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Container className="content-container">
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
          <Route path="/map" element={<MapView />} />
        </Routes>
        <footer className="footer">
          Icons by
          <a href="https://icons8.com"> Icons8</a>.
        </footer>
      </Container>
    </BrowserRouter>
  );
};
