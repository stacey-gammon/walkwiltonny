import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Image, Carousel, Jumbotron, Button } from 'react-bootstrap';
import ContactForm from './components/contact_form';

export default function Home() {
  const CoverPhoto = () => {
    return (
      <div style={{ width: 'auto', position: 'relative', textAlign: 'center', minHeight: '250px' }}>
        <Image fluid responsive style={{ minHeight: '250px' }} src="./lake.jpg"></Image>
        <div className="photo-hover-text">
          <h1>Sign the petition to get more sidewalks in Wilton, New York.</h1>
          <p>We would like sidewalks, because they are safe, and fun. yay</p>
          <Button variant="warning" className="signPetitionButton" href="http://chng.it/YsfHcWjYvH">
            Sign the petition
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Walk Wilton NY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Walk Wilton NY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="#About">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Petition">Sign the petition</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="About">
          <CoverPhoto />
        </div>

        <div id="Contact">
          <Jumbotron>
            <h2>Got questions? Want to get involved? Shoot us an email!</h2>
            <ContactForm />
          </Jumbotron>
        </div>

        <div id="Petition">
          <Jumbotron>
            <h2>Sign the petition to show your support.</h2>
            <Button
              variant="warning"
              className="signPetitionButton"
              href="http://chng.it/YsfHcWjYvH"
            >
              Sign the petition
            </Button>
          </Jumbotron>
        </div>
      </main>

      <footer className={styles.footer}>
        For all those in Wilton, Saratoga County, New York who want to walk around safely.
      </footer>
    </div>
  );
}
