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
    <form onSubmit={handleSubmit} name="contact">
      {showSuccess ? <Alert variant="success">Successfully submitted form.</Alert> : null}
      {error ? <Alert variant="error">{error}</Alert> : null}
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>
      <input type="hidden" name="form-name" value="contact" />
      <Button variant="primary" type="submit">
        Send
      </Button>
    </form>
  );
};

export default ContactForm;
