import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Row, Image, Container, Col, Jumbotron, Button } from 'react-bootstrap';
import ContactForm from './components/contact_form';

export default function Home() {
  const CoverPhoto = () => {
    return (
      <div style={{ width: 'auto', position: 'relative', textAlign: 'center', minHeight: '250px' }}>
        <Image fluid responsive style={{ minHeight: '250px' }} src="./lake.jpg"></Image>
        <div className="photo-hover-text">
          <h1 className="websiteTitle">Walk Wilton Project</h1>
          <h3>
            <i>
              This is a proposal to create sidewalks in Wilton, New York connecting our community
            </i>
          </h3>
          <p>
            {' '}
            Sidewalks play a vital role in community life. As a way for pedestrian movement and
            access, they enhance connectivity and promote walking. As public spaces, sidewalks are
            the front steps to a community, activating streets both socially and economically. It
            makes little sense that in this neighborhood, sidewalks do not exist.
          </p>
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
                <Nav.Link href="#Why">Why</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Contact">Myths</Nav.Link>
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

        <CoverPhoto />

        <div id="Why">
          <Jumbotron>
            <h1 className="sectionTitle">Why</h1>
            <Row className="InfoSectionRow">
              <Col className="InfoSectionCallout" style={{ backgroundColor: '#687980' }}>
                <div>
                  <p className="InfoSectionCalloutText">94 miles of sidewalks</p>
                </div>
              </Col>
              <Col className="InfoSectionCallout">
                <div className="InfoSectionDetailText">
                  <p>
                    Saratoga Springs has one of America’s best Downtowns,{' '}
                    <b>94 miles of sidewalks</b> that we can connect to. Saratoga has been
                    designated a Bronze-Level Walk Friendly Community.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="InfoSectionRow">
              {' '}
              <Col className="InfoSectionCallout">
                <div className="InfoSectionDetailText">
                  <p>
                    Retail properties with a Walk Score ranking of 80 out of 100 were{' '}
                    <b>valued 54 percent higher</b> than properties with a Walk Score of 20 and had
                    an increase in net operating income of 42 percent for more walkable properties.
                  </p>
                </div>
              </Col>
              <Col className="InfoSectionCallout" style={{ backgroundColor: '#f3bda1' }}>
                <div>
                  <p className="InfoSectionCalloutText">54% increase of property value</p>
                </div>
              </Col>
            </Row>

            <Row className="InfoSectionRow">
              <Col className="InfoSectionCallout" style={{ backgroundColor: '#fefecc' }}>
                <div>
                  <p className="InfoSectionCalloutText">local shops and restaurants</p>
                </div>
              </Col>
              <Col className="InfoSectionCallout">
                <div className="InfoSectionDetailText">
                  <p>
                    Sidewalks increase foot traffic in retail centers, delivering the customers that
                    local shops and restaurants need in order to thrive. <br />
                    <br />
                    Battle Lake, Minnesota (pop. 735) downsized a highway running through town.
                    Highway 78 — the town's Main Street — local citizens persuaded the agency to do
                    a road diet, narrowing the roadway from four lanes to three, and widening the
                    sidewalk through downtown. Twenty-one new businesses opened in town, including a
                    hotel and bakery, since the project was completed in 2014, reports MnDOT.
                  </p>
                </div>
              </Col>
            </Row>
          </Jumbotron>
        </div>

        <div id="Myths">
          <Jumbotron>
            <h2>Myths</h2>
            <p>
              <ul>
                <li>
                  “No one will use the sidewalk.” This might have been true in the past, but
                  research published in 2012 by the U.S. Centers for Disease Control and Prevention7
                  (CDC) and in 2013 by the National Center for Safe Routes to School8 shows that a
                  growing number of people are walking, and that many are children and adults age 65
                  and older. People just need safe, convenient and pleasant places near their homes,
                  schools and workplaces to make walking routine, says the CDC study.
                </li>

                <li>
                  “Americans prefer to drive.” Perhaps, or maybe they’re driving so much because
                  there are no sidewalks! Federal data on vehicle miles traveled and a recent
                  national study show a decline in driving and car ownership during the 2000s in an
                  overwhelming majority of metro areas. At the same time, the number of people
                  commuting by bicycle and transit increased.9 A survey by the Surface
                  Transportation Policy Partnership found that 55 percent of Americans would prefer
                  to walk more and drive less.10
                </li>

                <li>
                  “Trees will be destroyed.” Not necessarily. Sidewalks can be curved to avoid
                  trees. In fact, protecting a tree is one of the few reasons for a sidewalk to
                  deviate from a direct route. - <a href="">source</a>
                </li>
                <li>
                  “A sidewalk will take land from my lawn.” Many homeowners don’t realize how far
                  from the curb their private property line actually extends. There’s often enough
                  of a public right-of-way easement in place to create a sidewalk without infringing
                  in any way on a property owner’s land.12{' '}
                </li>
                <li>
                  {' '}
                  “People will walk too close to my house.” There’s little difference between what
                  passersby can see from a sidewalk versus what they can already see from their cars
                  or by walking along the edge of the street. Any nearness added by a sidewalk would
                  likely be as little as a just a few feet.13M
                </li>
                <li>
                  “Sidewalks increase crime.” Actually, increased pedestrian activity puts more eyes
                  on the street and creates safety in numbers, which deters and reduces criminal
                  activity.14{' '}
                  <li>
                    {' '}
                    “Tax dollars are better spent on other needs.” Since sidewalks increase property
                    values and tax revenues, they serve as an economic engine. Plus, sidewalk
                    maintenance costs are real estate tax-deductible (IRS Publication 530).
                    Sidewalks are also safety investments (by bringing more eyes and ears to the
                    street) and an integral part of a balanced transportation budget
                  </li>
                </li>
              </ul>
            </p>
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
        <div id="Contact">
          <Jumbotron>
            <h2>Got questions? Want to get involved? Shoot us an email!</h2>
            <ContactForm />
          </Jumbotron>
        </div>

        <div>
          <Jumbotron>
            <h1>Resources</h1>

            <ul>
              <li>
                <a href="https://www.aarp.org/livable-communities/archives/info-2014/rural-livability.html">
                  AARP Rural livability
                </a>
              </li>
              <li>
                <a href="https://www.aarp.org/livable-communities">
                  AARP Livable Communities newsletter{' '}
                </a>
              </li>
            </ul>
          </Jumbotron>
        </div>
      </main>

      <footer className={styles.footer}>
        For all those in Wilton, Saratoga County, New York who want to walk around safely.
      </footer>
    </div>
  );
}
