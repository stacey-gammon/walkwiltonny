import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Container, Row, Col, Button, Card } from 'react-bootstrap';
import ContactForm from './components/contact_form';

export default function Home() {
  const HeroSection = () => {
    return (
      <div className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="websiteTitle">The Walk and Bike Wilton Project</h1>
            <p className="hero-subtitle">Connecting our community through safe, accessible pathways</p>
            <div className="d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center">
              <Button
                as="a"
                href="http://chng.it/YsfHcWjYvH"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                size="lg"
              >
                Sign the Petition
              </Button>
              <Button
                as="a"
                href="https://www.facebook.com/groups/1112601030137379"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline-light"
                size="lg"
              >
                Join Our Community
              </Button>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/groups/1112601030137379" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </Container>
      </div>
    );
  };

  return (
    <div className="mainBody">
      <Head>
        <title>The Walk and Bike Wilton Project - Safe Pathways for Our Community</title>
        <meta name="description" content="Join the Walk and Bike Wilton Project in advocating for safe, accessible multi-use paths throughout Wilton, NY. Connect our community through walking and biking infrastructure." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>

      <main>
        <Navbar expand="lg" className="navbar">
          <Container>
            <Navbar.Brand href="#home" className="navbar-brand">
              <img src="/walkwiltonlogo.png" alt="Walk Wilton Logo" height="40" className="d-inline-block align-top" />
              Walk Wilton NY
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#What">What</Nav.Link>
                <Nav.Link href="#Where">Where</Nav.Link>
                <Nav.Link href="#key">Key Points</Nav.Link>
                <Nav.Link href="#Myths">Myths</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <Nav.Link href="#Petition" className="btn btn-primary text-white ms-2">Sign Petition</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
        <HeroSection />
        <section id="What" className="section">
          <Container>
            <h2 className="sectionTitle">What We're About</h2>
            <Row className="justify-content-center">
              <Col lg="10">
                <Card className="content-card">
                  <Card.Body>
                    <p className="lead">
                      If you're a resident of Wilton, New York, you know how important it is to have safe and 
                      accessible pedestrian pathways throughout our community. Multi-use paths provide a great opportunity 
                      to improve connectivity, promote healthy living, and activate our streets both socially and economically.
                    </p>
                    <p>
                      By signing our petition, you can help make this a reality <strong>without any additional burden on taxpayers</strong> by leveraging the town's available budget surplus.
                    </p>
                    <p>
                      Moreover, multi-use paths offer a range of benefits beyond just transportation. They promote healthy lifestyles by encouraging walking, running, and biking, and they create a sense of community by bringing people together in shared public spaces. Additionally, multi-use paths can be a catalyst for economic activity, attracting businesses and boosting property values in the surrounding area.
                    </p>
                    <p>
                      We believe that investing in multi-use paths is a smart and worthwhile endeavor for our community.
                      And with your help, we can make it happen. So if you're passionate about creating a more connected, healthy, and vibrant community in Wilton, 
                      please sign our petition and join us in this effort.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="Where" className="section">
          <Container>
            <h2 className="sectionTitle">Where We're Building</h2>
            <Row className="justify-content-center">
              <Col lg="10">
                <Card className="content-card">
                  <Card.Body>
                    <p className="lead">
                      In phase one of our proposal, we aim to install multi-use paths on Gick/Jones Road, extending from NY-29 to Route 50, and Maple Ave (NYS Route 9), extending from NY-29 to just past Spring Run. Phase two would include adding multi-use paths to Carr Road, Davidson Drive, and Northern Pines Road, extending from Maple Ave to Lonesome Pine Trail.
                    </p>
                    <p>
                      Our primary focus is on providing safe neighborhood accessibility to Gavin Park, Dorothy Nolan Elementary School, and Maple Avenue Middle School.
                    </p>
                    
                    <div className="row mt-4">
                      <div className="col-md-6">
                        <h3>Phase 1</h3>
                        <div className="map-container">
                          <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1JIv7N3rvXfnmmpoHoP9Zux91eOs"
                            width="100%"
                            height="400"
                            title="Phase 1 Multi-use Path Plan"
                          ></iframe>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h3>Phase 2</h3>
                        <div className="map-container">
                          <iframe
                            src="https://www.google.com/maps/d/u/0/embed?mid=1rdo7HFN-c2eIjHF-hmUCeP6GpPOr-RZ4"
                            width="100%"
                            height="400"
                            title="Phase 2 Multi-use Path Plan"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="key" className="section">
          <Container>
            <h2 className="sectionTitle">Why This Matters</h2>
            <Row>
              <Col lg="4" className="mb-4">
                <Card className="content-card h-100">
                  <Card.Body>
                    <h3 className="text-primary">54% Property Value Increase</h3>
                    <p>
                      Retail properties with a Walk Score ranking of 80 out of 100 were{' '}
                      <strong>valued 54 percent higher</strong> than properties with a Walk Score of 20 and had
                      an increase in net operating income of 42 percent for more walkable properties.
                    </p>
                    <p>
                      When people are looking to buy a house in Wilton, Saratoga County, they may ask
                      themselves:
                    </p>
                    <ul className="list-unstyled">
                      <li><i className="fas fa-check text-success me-2"></i>Can I walk to <a href="https://townofwilton.com/departments/gavin-park/">Gavin Park</a>?</li>
                      <li><i className="fas fa-check text-success me-2"></i>Can I walk to <a href="https://www.saratogaschools.org/MapleAvenue.cfm?subpage=1377009">Maple Ave Middle School</a>?</li>
                      <li><i className="fas fa-check text-success me-2"></i>Can I walk to <a href="https://www.saratogaschools.org/DorothyNolan.cfm">Dorothy Nolan Elementary</a>?</li>
                      <li><i className="fas fa-check text-success me-2"></i>Can I walk to <a href="https://olde-saratoga-miniature-golf.business.site">mini golf</a>?</li>
                      <li><i className="fas fa-check text-success me-2"></i>Is the <a href="https://www.dairyhaus.com/">Dairy Haus</a> walkable?</li>
                    </ul>
                    <p>
                      Being able to answer yes to all these questions will increase all our property
                      values, <em>and</em> improve the accessibility of our area.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg="4" className="mb-4">
                <Card className="content-card h-100">
                  <Card.Body>
                    <h3 className="text-primary">94 Miles of Connected Paths</h3>
                    <p>
                      Saratoga Springs has one of America's best Downtowns,{' '}
                      <strong>94 miles of multi-use paths</strong> that we can connect to. Saratoga has been
                      designated a Bronze-Level Walk Friendly Community.
                    </p>
                    <p>
                      Saratoga Springs is planning to enhance its multi-use paths with the{' '}
                      <a href="https://www.saratoga-springs.org/2425/Saratoga-Greenbelt-Trail">
                        Saratoga Greenbelt Trail
                      </a>
                      . Multi-use paths in Wilton connecting to this trail system would exponentially
                      increase the walkability of our town.
                    </p>
                    <div className="mt-3">
                      <p><strong>Current Walk Scores:</strong></p>
                      <p>Wilton, NY: <a href="https://www.walkscore.com/score/wilton-new-york" className="text-danger">8</a></p>
                      <p>Saratoga Springs: <a href="https://www.walkscore.com/NY/Saratoga_Springs" className="text-success">42</a></p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              
              <Col lg="4" className="mb-4">
                <Card className="content-card h-100">
                  <Card.Body>
                    <h3 className="text-primary">Economic Benefits</h3>
                    <p>
                      Multi-use paths increase foot traffic in retail centers, delivering the customers that
                      local shops and restaurants need in order to thrive.
                    </p>
                    <div className="bg-light p-3 rounded">
                      <p className="mb-0">
                        <em>
                          Battle Lake, Minnesota (pop. 735) downsized a highway running through town.
                          Highway 78 — the town's Main Street — local citizens persuaded the agency to
                          do a road diet, narrowing the roadway from four lanes to three, and widening
                          the multi-use path through downtown. <strong>Twenty-one new businesses opened in town</strong>
                          , including a hotel and bakery, since the project was completed in 2014.
                        </em>
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section id="Myths" className="section">
          <Container>
            <h2 className="sectionTitle">Addressing Common Concerns</h2>
            <Row>
              <Col lg="6" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-walking text-primary me-2"></i>"No one will use the multi-use path."</h3>
                  <p>
                    This might have been true in the past, but research published in 2012 by the U.S.
                    Centers for Disease Control and Prevention and in 2013 by the National Center
                    for Safe Routes to School shows that a growing number of people are walking, and
                    that many are children and adults age 65 and older. People just need safe,
                    convenient and pleasant places near their homes, schools and workplaces to make
                    walking routine.
                  </p>
                </div>
              </Col>
              
              <Col lg="6" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-car text-primary me-2"></i>"Americans prefer to drive."</h3>
                  <p>
                    Perhaps, or maybe they're driving so much because there are no multi-use paths! Federal
                    data on vehicle miles traveled and a recent national study show a decline in driving
                    and car ownership during the 2000s in an overwhelming majority of metro areas. A
                    survey by the Surface Transportation Policy Partnership found that 55 percent of
                    Americans would prefer to walk more and drive less.
                  </p>
                </div>
              </Col>
              
              <Col lg="6" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-tree text-primary me-2"></i>"Trees will be destroyed."</h3>
                  <p>
                    Not necessarily. Multi-use paths can be curved to avoid trees. In fact, protecting a tree
                    is one of the few reasons for a multi-use path to deviate from a direct route.
                  </p>
                </div>
              </Col>
              
              <Col lg="6" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-home text-primary me-2"></i>"A multi-use path will take land from my lawn"</h3>
                  <p>
                    Many homeowners don't realize how far from the curb their private property line
                    actually extends. There's often enough of a public right-of-way easement in place to
                    create a multi-use path without infringing in any way on a property owner's land.
                  </p>
                </div>
              </Col>
              
              <Col lg="6" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-user text-primary me-2"></i>"People will walk too close to my house."</h3>
                  <p>
                    There's little difference between what passersby can see from a multi-use path versus what
                    they can already see from their cars or by walking along the edge of the street. Any
                    nearness added by a multi-use path would likely be as little as just a few feet.
                  </p>
                </div>
              </Col>
              
              <Col lg="6" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-shield-alt text-primary me-2"></i>"Multi-use paths increase crime."</h3>
                  <p>
                    Actually, increased pedestrian activity puts more eyes on the street and creates
                    safety in numbers, which deters and reduces criminal activity.
                  </p>
                </div>
              </Col>
              
              <Col lg="12" className="mb-4">
                <div className="mythBox">
                  <h3><i className="fas fa-dollar-sign text-primary me-2"></i>"Tax dollars are better spent on other needs."</h3>
                  <p>
                    Since multi-use paths increase property values and tax revenues, they serve as an economic
                    engine. Plus, multi-use paths maintenance costs are real estate tax-deductible (IRS
                    Publication 530). Multi-use paths are also safety investments (by bringing more eyes and
                    ears to the street) and an integral part of a balanced transportation budget.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="Petition" className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8" className="text-center">
                <Card className="content-card">
                  <Card.Body>
                    <h2 className="sectionTitle">Show Your Support</h2>
                    <p className="lead">
                      Join hundreds of Wilton residents who are already supporting this initiative. 
                      Your signature makes a difference!
                    </p>
                    <Button
                      as="a"
                      href="http://chng.it/YsfHcWjYvH"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      size="lg"
                    >
                      <i className="fas fa-pen me-2"></i>Sign the Petition
                    </Button>
                    <p className="mt-3 text-muted">
                      <small>Petition hosted on Change.org - secure and trusted platform</small>
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section id="Contact" className="section">
          <Container>
            <h2 className="sectionTitle">Get Involved</h2>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="content-card">
                  <Card.Body>
                    <h3 className="text-center mb-4">Got questions? Want to get involved?</h3>
                    <p className="text-center mb-4">
                      We'd love to hear from you! Send us a message and we'll get back to you as soon as possible.
                    </p>
                    <ContactForm />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section">
          <Container>
            <h2 className="sectionTitle">Research & Resources</h2>
            <Row className="justify-content-center">
              <Col lg="10">
                <div className="resources-list">
                  <ol>
                    <li>
                      National Association of Realtors. (November 2013){' '}
                      <a href="https://www.nar.realtor/reports/nar-community-and-transportation-preference-surveys">
                        National Community Preference Survey
                      </a>
                    </li>
                    <li>
                      Sallis J., et al.{' '}
                      <a href="https://pubmed.ncbi.nlm.nih.gov/19460656/">
                        "Neighborhood Environments and Physical Activity among Adults in 11 countries."
                      </a>{' '}
                      American Journal of Preventive Medicine, Vol. 36, No.2
                    </li>
                    <li>
                      National Association of City Transportation Officials (NACTO). (October 2012){' '}
                      <a href="http://www.nyc.gov/html/dot/downloads/pdf/2012-nacto-urban-street-design-guide.pdf">
                        Urban Street Design Guide
                      </a>{' '}
                      pp 24-25.
                    </li>
                    <li>
                      <a href="http://www.walkscore.com">Walk Score</a> is an online logarithmic ranking
                      system that determines the basic walkability of a residential or commercial
                      property. Walk Score uses neighborhood factors such as distance to shops and schools
                      to create a number between 0 and 100 that measures the walkability of any address.
                    </li>
                    <li>
                      Pivo, G. and Fisher, J.D. (2010){' '}
                      <a href="http://www.u.arizona.edu/~gpivo/Walkability%20Paper%208_4%20draft.pdf">
                        The Walkability Premium in Commercial Real Estate Investments.
                      </a>{' '}
                      University of Arizona and Benecki Center for Real Estate Studies, Indiana University.
                    </li>
                    <li>
                      Cortright, J. Impresa, Inc., CEOs for Cities. (August 2009){' '}
                      <a href="https://community-wealth.org/content/walking-walk-how-walkability-raises-home-values-us-cities">
                        Walking the Walk: How Walkability Raises Home Values in U.S. Cities.
                      </a>
                    </li>
                    <li>
                      Centers for Disease Control and Prevention. (August 2012) Vital Signs.{' '}
                      <a href="https://www.cdc.gov/vitalsigns/walking/">
                        More People Walk to Better Health
                      </a>
                    </li>
                    <li>
                      National Center for Safe Routes to School. (October 2013){' '}
                      <a href="https://www.pedbikeinfo.org/pdf/SRTSlocal_Trends2007-2012.pdf">
                        Trends in Walking and Bicycling to School from 2007 – 2012.
                      </a>
                    </li>
                    <li>
                      U.S. PIRG Educational Fund. (December 2013) Transportation in Transition:{' '}
                      <a href="https://www.parking-mobility.org/2020/07/01/mrc-transportation-in-transition-a-look-at-changing-travel-patterns-in-americas-biggest-cities/">
                        A Look at Changing Travel Patterns in America's Biggest Cities
                      </a>
                    </li>
                    <li>
                      Surface Transportation Policy Project, Belden Russonello & Stewart. (April 2003)
                      Americans' Attitudes Toward Walking and Creating Better Walking Communities
                    </li>
                    <li>
                      <a href="https://www.aarp.org/livable-communities/archives/info-2014/rural-livability.html">
                        AARP Rural Livability
                      </a>
                    </li>
                    <li>
                      <a href="https://www.aarp.org/livable-communities">
                        AARP Livable Communities Newsletter
                      </a>
                    </li>
                  </ol>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <footer className="footer">
        <Container>
          <p className="text-center">
            For all those in Wilton, Saratoga County, New York who want to walk around safely.
          </p>
          <div className="text-center mt-3">
            <a href="https://www.facebook.com/groups/1112601030137379" target="_blank" rel="noopener noreferrer" className="text-white me-3">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="http://chng.it/YsfHcWjYvH" target="_blank" rel="noopener noreferrer" className="text-white">
              <i className="fas fa-pen fa-lg"></i>
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}
