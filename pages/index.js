import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Image, Carousel, Jumbotron, Button } from 'react-bootstrap';

export default function Home() {
  const CoverPhoto = () => {
    var background = { maxWidth: '1400px' };
    var textStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
    };

    return (
      <div style={{ width: 'auto', position: 'relative', textAlign: 'center' }}>
        <Image fluid responsive src="./lake.jpg"></Image>
        <div className="photo-hover-text">
          <h1>Sign the petition to get more sidewalks in Wilton, New York.</h1>
          <p>We would like sidewalks, because they are safe, and fun. yay</p>
        </div>
      </div>
    );
  };

  const Carosel = () => (
    <div style={{ maxWidth: '900px' }}>
      <Carousel>
        <Carousel.Item>
          <img className="carousel-img-item" src="./lake.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Sidewalks to safely see Loughberry Lake!</h3>
            <p>We like sidewalks</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img-item"
            src="https://source.unsplash.com/Pw7i-YVg5uM/1600x900"
            alt="More sidewalks"
          />

          <Carousel.Caption>
            <h3>Side walks are so cool</h3>
            <p>Everyone is just so happy with sidewalks</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );

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
                <Nav.Link href="#Subscribe">Sign the petition</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div id="About">
          <CoverPhoto />
        </div>

        <div id="Contact">
          <Jumbotron>
            <h1>Creating a more walkable experience</h1>
            <p>What should we do to make this possible?</p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>
        </div>

        <div id="Subscribe">
          <Jumbotron>Put some form to sign up to a mailing list? Or sign a petition?</Jumbotron>
        </div>
      </main>

      <footer className={styles.footer}>
        For all those in Wilton, Saratoga County, New York who want to walk around safely.
      </footer>
    </div>
  );
}
