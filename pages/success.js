import { Nav, Navbar, Form, Image, Jumbotron, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function Success() {
  return (
    <Jumbotron>
      <h1>Form successfully submitted</h1>
      <p>We'll be in touch soon!</p>
      <p>
        <Link href="/">
          <Button href="/" variant="primary">
            Go back
          </Button>
        </Link>
      </p>
    </Jumbotron>
  );
}
