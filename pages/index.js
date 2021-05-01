import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Row, Image, Container, Col, Jumbotron, Button } from 'react-bootstrap';
import ContactForm from './components/contact_form';

export default function Home() {
  /* <Image fluid responsive style={{ minHeight: '450px' }} src="./lake.jpg"></Image> */
  const CoverPhoto = () => {
    return (
      <div style={{ width: 'auto', textAlign: 'center', minHeight: '450px' }}>
        <div className="photo-hover-text">
          <h1 className="websiteTitle">Walk Wilton Project</h1>
          <p>
            <i>Connecting our community</i>
          </p>
          <h3>
            <i>This is a proposal to create sidewalks in Wilton, New York</i>
          </h3>
          <p style={{ backgroundColor: '#687980', padding: '10px' }}>
            {' '}
            Sidewalks play a vital role in community life. As a way for pedestrian movement and
            access, they enhance connectivity and promote walking. As public spaces, sidewalks are
            the front steps to a community, activating streets both socially and economically.
          </p>
          <Button variant="warning" className="signPetitionButton" href="http://chng.it/YsfHcWjYvH">
            Sign the petition
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="mainBody">
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

        <Jumbotron>
          <CoverPhoto />
        </Jumbotron>
        <div id="Why">
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h1 className="sectionTitle">Why</h1>
            <Row className="InfoSectionRow">
              <Col
                className="InfoSectionCallout"
                style={{ backgroundColor: '#687980', color: 'white' }}
              >
                <div className="InfoSectionCalloutText">
                  <h3>94 miles of sidewalks</h3>
                </div>
              </Col>
              <Col className="InfoSectionCallout">
                <div className="InfoSectionDetailText">
                  <p>
                    Saratoga Springs has one of America’s best Downtowns,{' '}
                    <b>94 miles of sidewalks</b> that we can connect to. Saratoga has been
                    designated a Bronze-Level Walk Friendly Community. Saratoga Springs is planning
                    to enhance it's sidewalks with the{' '}
                    <a href="https://www.saratoga-springs.org/2425/Saratoga-Greenbelt-Trail">
                      Saratoga Greenbelt Trail
                    </a>
                    . Sidewalks in Wilton connecting to this trail system would exponentially
                    increase the walkability of our town.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="InfoSectionRow">
              <Col className="InfoSectionCallout" style={{ backgroundColor: '#f3bda1' }}>
                <div className="InfoSectionCalloutText">
                  <h3>54% increase in property value</h3>
                </div>
              </Col>
              <Col className="InfoSectionCallout">
                <div className="InfoSectionDetailText">
                  <p>
                    Retail properties with a Walk Score ranking of 80 out of 100 were{' '}
                    <b>valued 54 percent higher</b> than properties with a Walk Score of 20 and had
                    an increase in net operating income of 42 percent for more walkable properties.
                  </p>
                  <p>
                    When people are looking to buy a house in Wilton, Saratoga County, they may ask
                    themselves:
                  </p>
                  <p>
                    <i>
                      Can I walk from my house to{' '}
                      <a href="https://townofwilton.com/departments/gavin-park/">Gavin Park</a>?
                    </i>
                  </p>
                  <p>
                    <i>
                      Can I walk to{' '}
                      <a href="https://www.saratogaschools.org/MapleAvenue.cfm?subpage=1377009">
                        Maple Ave Middle school
                      </a>
                      ?
                    </i>
                  </p>
                  <p>
                    <i>
                      Can I walk to{' '}
                      <a href="https://www.saratogaschools.org/DorothyNolan.cfm">
                        Dorothy Nolan Elementary school
                      </a>
                      ?
                    </i>
                  </p>
                  <p>
                    <i>
                      Can I walk from my house to{' '}
                      <a href="https://olde-saratoga-miniature-golf.business.site">mini golf</a>?
                    </i>
                  </p>
                  <p>
                    <i>
                      Is the local <a href="https://www.dairyhaus.com/">Dairy Haus</a> walkable?
                    </i>
                  </p>

                  <p>
                    Being able to answer yes to all these questions will increase all our property
                    values, <i>and</i> improve the accessibility of our area.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="InfoSectionRow">
              <Col className="InfoSectionCallout" style={{ backgroundColor: '#fefecc' }}>
                <div className="InfoSectionCalloutText">
                  <h3>Local shops and restaurants</h3>
                </div>
              </Col>
              <Col className="InfoSectionCallout">
                <div className="InfoSectionDetailText">
                  <p>
                    Sidewalks increase foot traffic in retail centers, delivering the customers that
                    local shops and restaurants need in order to thrive. <br />
                    <br />
                    <i>
                      Battle Lake, Minnesota (pop. 735) downsized a highway running through town.
                      Highway 78 — the town's Main Street — local citizens persuaded the agency to
                      do a road diet, narrowing the roadway from four lanes to three, and widening
                      the sidewalk through downtown. Twenty-one new businesses opened in town,
                      including a hotel and bakery, since the project was completed in 2014, reports
                      MnDOT.
                    </i>
                  </p>
                </div>
              </Col>
            </Row>
          </Jumbotron>
        </div>

        <div id="Myths">
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h1 className="sectionTitle">Myths</h1>

            <div className="mythBox">
              <h3>🚷 “No one will use the sidewalk.”</h3>
              <p>
                This might have been true in the past, but research published in 2012 by the U.S.
                Centers for Disease Control and Prevention7 (CDC) and in 2013 by the National Center
                for Safe Routes to School8 shows that a growing number of people are walking, and
                that many are children and adults age 65 and older. People just need safe,
                convenient and pleasant places near their homes, schools and workplaces to make
                walking routine, says the CDC study.
              </p>
            </div>

            <div className="mythBox">
              <h3>🚙 “Americans prefer to drive.”</h3>
              <p>
                Perhaps, or maybe they’re driving so much because there are no sidewalks! Federal
                data on vehicle miles traveled and a recent national study show a decline in driving
                and car ownership during the 2000s in an overwhelming majority of metro areas. At
                the same time, the number of people commuting by bicycle and transit increased.9 A
                survey by the Surface Transportation Policy Partnership found that 55 percent of
                Americans would prefer to walk more and drive less.
              </p>
            </div>

            <div className="mythBox">
              <h3>🌳 “Trees will be destroyed.”</h3>
              <p>
                {' '}
                Not necessarily. Sidewalks can be curved to avoid trees. In fact, protecting a tree
                is one of the few reasons for a sidewalk to deviate from a direct route.
              </p>
            </div>
            <div className="mythBox">
              <h3>🏠 "A sidewalk will take land from my lawn"</h3>
              <p>
                Many homeowners don’t realize how far from the curb their private property line
                actually extends. There’s often enough of a public right-of-way easement in place to
                create a sidewalk without infringing in any way on a property owner’s land
              </p>
            </div>
            <div className="mythBox">
              <h3>🚶 “People will walk too close to my house.”</h3>

              <p>
                There’s little difference between what passersby can see from a sidewalk versus what
                they can already see from their cars or by walking along the edge of the street. Any
                nearness added by a sidewalk would likely be as little as a just a few feet.
              </p>
            </div>
            <div className="mythBox">
              <h3>🔐 "Sidewalks increase crime."</h3>
              <p>
                {' '}
                Actually, increased pedestrian activity puts more eyes on the street and creates
                safety in numbers, which deters and reduces criminal activity
              </p>
              <h3>💰 “Tax dollars are better spent on other needs.” </h3>
            </div>
            <div className="mythBox">
              <p>
                Since sidewalks increase property values and tax revenues, they serve as an economic
                engine. Plus, sidewalk maintenance costs are real estate tax-deductible (IRS
                Publication 530). Sidewalks are also safety investments (by bringing more eyes and
                ears to the street) and an integral part of a balanced transportation budget
              </p>
            </div>
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
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h1 className="sectionTitle">Resources</h1>
            <ul>
              <li>
                <a href="https://www.aarp.org/livable-communities/archives/info-2014/rural-livability.html">
                  AARP Rural livability
                </a>
              </li>
              <li>
                <a href="https://www.aarp.org/livable-communities">
                  CARP Livable Communities newsletter{' '}
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
