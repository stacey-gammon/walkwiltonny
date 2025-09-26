import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message }),
    }).then((response) => {
      console.log(response);
      if (response.status == 200) {
        setShowSuccess(true);
        setMessage('');
        setName('');
        setEmail('');
        setError('');
      } else {
        setError(response.body.error);
        setShowSuccess(false);
      }
    });
    e.preventDefault();
  };

  return (
    <Form action="/success" name="contact" method="POST" data-netlify="true" className="contact-form">
      {showSuccess ? <Alert variant="success">Successfully submitted form.</Alert> : null}
      {error ? <Alert variant="danger">{error}</Alert> : null}
      
      <Form.Group className="mb-3">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label className="form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      
      <Form.Group className="mb-4">
        <Form.Label className="form-label">Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          value={message}
          name="message"
          placeholder="Tell us how you'd like to get involved or ask any questions..."
          onChange={(e) => setMessage(e.target.value)}
          className="form-control"
          required
        />
      </Form.Group>
      
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="text-center">
        <Button variant="primary" type="submit" size="lg" className="btn-primary">
          <i className="fas fa-paper-plane me-2"></i>Send Message
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
