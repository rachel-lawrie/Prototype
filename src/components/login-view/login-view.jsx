import { Button, Form } from "react-bootstrap";

export const LoginView = () => {
  return (
    <>
      <h1 className="login-title text-center mt-4">OtherForest</h1>
      <p className="text-center mb-2 mt-5">Login to your account</p>
      <Form>
        <Form.Group controlId="formUsername" className="mb-3">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" required minLength="3" />
        </Form.Group>

        <Form.Group controlId="formPassword" className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100 mb-3">
          Submit
        </Button>
      </Form>
      <a className="text-muted text-center d-block pt-1 mb-5 pb-1">
        Forgot password?
      </a>
      <p className="text-muted">
        Don't have an account? Contact your organization's administrator.
      </p>
    </>
  );
};
