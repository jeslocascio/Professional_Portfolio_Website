import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/Contact.css";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    const recipientEmail = "locascioje@gmail.com";

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `Message from ${name} - ${subject}`
    )}&body=${encodeURIComponent(
      `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ASubject: ${subject}%0D%0AMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact" id="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
          <div className="text-center mb-4">
             <h1 className="section-header">Contact Me</h1>
             <span className="success-message text-muted font-italic"></span>
            </div>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="error-message py-1"></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      required
                    />
                    <div className="line"></div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="error-message py-1"></Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Your Phone Number"
                      name="phone"
                    />
                    <div className="line"></div>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="error-message py-1"></Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      required
                    />
                    <div className="line"></div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label className="error-message py-1"></Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      required
                    />
                    <div className="line"></div>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label className="error-message py-1"></Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your Message"
                  name="message"
                  required
                />
                <div className="line"></div>
              </Form.Group>
              <Button type="submit" className="contact-me mt-3" id="submit-button">
                Contact Me
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
