import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Row, Image, Container, Col, Jumbotron, Button } from 'react-bootstrap';
import ContactForm from './components/contact_form';
import Callout from './components/callout';

export default function Home() {
  const CoverPhoto = () => {
    return (
      <div style={{ width: 'auto', textAlign: 'center', height: '100%' }}>
        <div className="photo-hover-text">
          <h1 className="websiteTitle">Walk Wilton New York</h1>
          <p>
            <i>Connecting our community</i>
          </p>
          <h3>
            <i>
              This is a proposal to create sidewalks in Wilton, New York,{' '}
              <b>without raising our taxes!</b>
            </i>
          </h3>
          <p style={{ backgroundColor: '#687980', padding: '10px' }}>
            {' '}
            Sidewalks play a vital role in community life. As a way for pedestrian movement and
            access, they enhance connectivity and promote walking. As public spaces, sidewalks are
            the front steps to a community, activating streets both socially and economically.
          </p>
          <Button
            variant="warning"
            className="signPetitionButton"
            href="http://chng.it/YsfHcWjYvH"
            onClick={() =>
              ga.event({
                action: 'sign_petition',
              })
            }
          >
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
                <Nav.Link href="#Where">Where</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Why">Why</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Why">Key points</Nav.Link>
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
        <div id="Where">
          <Jumbotron>
            <h1 className="sectionTitle">Where</h1>
            <p>
              The residents of Wilton are proposing to have sidewalks installed on the following
              streets: Phase one sidewalks would include Gick/Jones Road, extending from NY-29 to
              Route 50, Smith Bridge Road, and Maple Ave 9p extending from NY-29 to just past Spring
              Run. Phase two would include adding sidewalks to Carr Road, Davidson Drive, and
              Northern Pines Road extending from Maple Ave 9p to Lonesome Pine Trail. The primary
              focus first being safe neighborhood accessibility to{' '}
              <b>Gavin Park, Dorothy Nolan Elementary School and Maple Avenue Middle School</b>. In
              addition, we propose any new construction or building in the town of Wilton will be
              required to incorporate sidewalks.
            </p>
          </Jumbotron>
        </div>
        <div id="Why">
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h1 className="sectionTitle">Why</h1>

            <p>
              {' '}
              Sidewalks play a vital role in community life. As a way for pedestrian movement and
              access, they enhance connectivity and promote walking. As public spaces, sidewalks are
              the front steps to a community, activating streets both socially and economically. It
              makes little sense that in this neighborhood, sidewalks do not exist.{' '}
            </p>
            <p>
              We as a community would like to make Wilton more inclusive. Sidewalks enable people
              from all socioeconomic status, and all types of disabilities an opportunity to safe
              access to alternate transportation, including safe access to bus routes and safe
              access to our local health care facilities. The ability to link Wilton sidewalks to
              the 94 miles of Saratoga Springs City sidewalks provides safe access to a multitude of
              opportunities for everyone including people who are disadvantaged.{' '}
            </p>
            <p>
              Covid 19 virus has taught us a lot. It made us all stop, think and see things in a new
              light. We as a community want to refocus our energies on what matters most. The virus
              has forced us to not only stay home more, but spend more time in our own community. We
              have been given the opportunity to slow down. We are working from home, loving it and
              not going back to the antiquated life style prepandemic. We go for more walks, ride
              bikes, play more with our kids, take our kids to school instead of the bus, and
              explore more than ever before, outside in our own back yards.{' '}
            </p>
            <p>
              In doing this, talk became strong and loud in this community, why can't we walk our
              kids safely to Gavin Park? Why can't we walk our kids safely to their school (Dorothy
              Nolan, Maple Ave)? Why can't we walk safely to the post office, the bank, or the local
              coffee shop? Where do the citizens of Wilton get there sense of community? WHERE ARE
              THE SIDEWALKS OTHER TOWNS HAVE? Wilton can do and be better!
            </p>
            <p>
              The children of Wilton are home now more than ever before. We hear parents and experts
              saying they need to get of their electronics, get outside, play, walk to your friends
              house, walk to the park. Unfortunately, over and over the answer is Jones Road and
              Maple Avenue are to dangerous to walk or ride on. Parents won't let their kids walk or
              ride on these roads, it's not safe. Adults don't feel safe to walk or ride on these
              roads let alone their children. The cars are to fast and to frequent. We can't walk
              our kids safely to the park. We can't walk them safely to their schools. In 2018 there
              were 6,283 pedestrians killed in traffic crashes in the United States. On average, a
              pedestrian was killed every 84 minutes in a traffic crash. That is more than 17 people
              a day, almost 121 people a week. Pedestrians killed while "walking along the
              roadway" Many of these tragedies are preventable. Providing walkways separated from
              the travel lanes could help to prevent up to 88 percent of these "walking along
              roadway crashes." Why are there no sidewalks in Wilton? It's time for a change.
            </p>
            <p>
              {' '}
              Everywhere towns across America are recognizing the importance of a walkable
              community, for safety, for better health, physically and mentally.
              The U.S. adult obesity rate stands at 42.4 percent, the first time the national rate
              has passed the 40 percent mark, and further evidence of the country's obesity crisis.
              The national adult obesity rate has increased by 26 percent since 2008. Statistics
              show that People who live in neighborhoods with sidewalks are 47 percent more likely
              to be active at least 39 minutes a day.
            </p>
            <p>
              We need to come together as a community in order to improve our lives. Sidewalks
              improve safety, equity and inclusivity, communication, and understanding of our
              neighbors. They give safe access to alternate transportation, increase property
              values, beautify the neighborhood, promote business, improve health, bring people
              together and help to create a sense of community.
            </p>
          </Jumbotron>
        </div>
        <div id="key">
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h1 className="sectionTitle">Key points</h1>

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
                  <p>
                    Wilton, New York has a{' '}
                    <a href="https://www.walkscore.com/score/wilton-new-york">
                      walk score of only 8
                    </a>
                    , while Saratoga Springs has a{' '}
                    <a href="https://www.walkscore.com/NY/Saratoga_Springs">walk score of 42.</a>
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
                      the sidewalk through downtown. <b>Twenty-one new businesses opened in town</b>
                      , including a hotel and bakery, since the project was completed in 2014,
                      reports MnDOT.
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
              onClick={() =>
                ga.event({
                  action: 'sign_petition',
                })
              }
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
            <ol>
              <li>
                <a id="ref1" />
                National Association of Realtors. (November 2013){' '}
                <a
                  href="
                https://www.nar.realtor/reports/nar-community-and-transportation-preference-surveys"
                >
                  National Community Preference Survey
                </a>
              </li>
              <li>
                <a id="ref2" />
                Sallis J., et al.{' '}
                <a href="https://pubmed.ncbi.nlm.nih.gov/19460656/">
                  “Neighborhood Environments and Physical Activity among Adults in 11 countries.”
                </a>{' '}
                American Journal of Preventive Medicine, Vol. 36, No.2
              </li>
              <li>
                <a id="ref3" />
                National Association of City Transportation Officials (NACTO). (October 2012){' '}
                <a
                  href="
                http://www.nyc.gov/html/dot/downloads/pdf/2012-nacto-urban-street-design-guide.pdf"
                >
                  Urban Street Design Guide
                </a>{' '}
                pp 24-25.
              </li>
              <li>
                <a id="ref4" />
                <a href="http://www.walkscore.com">Walk Score</a> is an online logarithmic ranking
                system that determines the basic walkability of a residential or commercial
                property. Walk Score uses neighborhood factors such as distance to shops and schools
                to create a number between 0 and 100 that measures the walkability of any address.
              </li>
              <li>
                <a id="ref5" />
                Pivo, G. and Fisher, J.D. (2010){' '}
                <a href="http://www.u.arizona.edu/~gpivo/Walkability%20Paper%208_4%20draft.pdf">
                  The Walkability Premium in Commercial Real Estate Investments.{' '}
                </a>{' '}
                University of Arizona and Benecki Center for Real Estate Studies, Indiana
                University.
              </li>
              <li>
                <a id="ref6" />
                Cortright, J. Impresa, Inc., CEOs for Cities. (August 2009){' '}
                <a
                  href="
                https://community-wealth.org/content/walking-walk-how-walkability-raises-home-values-us-cities"
                >
                  Walking the Walk: How Walkability Raises Home Values in U.S. Cities.
                </a>
              </li>
              <li>
                <a id="ref7" /> Centers for Disease Control and Prevention. (August 2012) Vital
                Signs.{' '}
                <a href="https://www.cdc.gov/vitalsigns/walking/">
                  More People Walk to Better Health
                </a>
              </li>
              <li>
                <a id="ref8"></a>
                National Center for Safe Routes to School. (October 2013){' '}
                <a href="https://www.pedbikeinfo.org/pdf/SRTSlocal_Trends2007-2012.pdf">
                  Trends in Walking and Bicycling to School from 2007 – 2012.
                </a>
              </li>
              <li>
                U.S. PIRG Educational Fund. (December 2013) Transportation in Transition:{' '}
                <a
                  href="https://www.parking-mobility.org/2020/07/01/mrc-transportation-in-transition-a-look-at-changing-travel-patterns-in-americas-biggest-cities/
             "
                >
                  A Look at Changing Travel Patterns in America’s Biggest Cities
                </a>
              </li>
              <li>
                Surface Transportation Policy Project, Belden Russonello & Stewart. (April 2003)
                Americans’ Attitudes Toward Walking and Creating Better Walking Communitie
              </li>
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
            </ol>
          </Jumbotron>
        </div>
      </main>

      <footer className={styles.footer}>
        For all those in Wilton, Saratoga County, New York who want to walk around safely.
      </footer>
    </div>
  );
}
