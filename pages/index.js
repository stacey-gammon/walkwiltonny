import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Nav, Navbar, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import ContactForm from './components/contact_form';


export default function Home() {
  const CoverPhoto = () => {
    return (
      <div style={{ width: 'auto', textAlign: 'center', height: '100%' }}>
        <div className="photo-hover-text">
          <h1 className="websiteTitle">The Walk and Bike Wilton Project</h1>
          <p>
            <i>Connecting our community</i>
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

          <p style={{ padding: '10px' }}>
            Join our <a href="https://www.facebook.com/groups/1112601030137379">facebook group</a> to get involved!
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="mainBody">
      <Head>
        <title>The Walk and Bike Wilton Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src="walkwiltonlogo.png" height="40" className="d-inline-block align-top" />
            Walk Wilton NY
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="#What">What</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Where">Where</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Why">Why</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#key">Key points</Nav.Link>
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
        <div id="What">
          <Jumbotron>
            <h2 className="sectionTitle">What</h2>
            <p>
            If you're a resident of Wilton, New York, you know how important it is to have safe and accessible pedestrian pathways throughout our community. Multi-use paths provide a great opportunity to improve connectivity, promote healthy living, and activate our streets both socially and economically.

By signing our petition, you can help make this a reality without any additional burden on taxpayers.
Moreover, multi-use paths offer a range of benefits beyond just transportation. They promote healthy lifestyles by encouraging walking, running, and biking, and they create a sense of community by bringing people together in shared public spaces. Additionally, multi-use paths can be a catalyst for economic activity, attracting businesses and boosting property values in the surrounding area.

We believe that investing in multi-use paths is a smart and worthwhile endeavor for our community. And with your help, we can make it happen without raising taxes. So if you're passionate about creating a more connected, healthy, and vibrant community in Wilton, please sign our petition and join us in this effort.
              </p>
          </Jumbotron>
        </div>
        <div id="Where">
          <Jumbotron>
            <h2 className="sectionTitle">Where</h2>
            <p>
            In phase one of our proposal, we aim to install multi-use paths on Gick/Jones Road, extending from NY-29 to Route 50, and Maple Ave (NYS Route 9), extending from NY-29 to just past Spring Run. Phase two would include adding multi-use paths to Carr Road, Davidson Drive, and Northern Pines Road, extending from Maple Ave to Lonesome Pine Trail. Our primary focus is on providing safe neighborhood accessibility to Gavin Park, Dorothy Nolan Elementary School, and Maple Avenue Middle School.
            </p>
            <h3>Phase 1</h3>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1JIv7N3rvXfnmmpoHoP9Zux91eOs"
              width="100%"
              height="480"
            ></iframe>

            <h3>Phase 2</h3>
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1rdo7HFN-c2eIjHF-hmUCeP6GpPOr-RZ4"
              width="100%"
              height="480"
            ></iframe>
          </Jumbotron>
        </div>
        <div id="key">
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h2 className="sectionTitle">Key Points</h2>
                  <h4>54% increase in property value</h4>
               
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
            
                  <h3>94 miles of multi-use paths</h3>
                
                  <p>
                    Saratoga Springs has one of America’s best Downtowns,{' '}
                    <b>94 miles of multi-use paths</b> that we can connect to. Saratoga has been
                    designated a Bronze-Level Walk Friendly Community. Saratoga Springs is planning
                    to enhance it's multi-use paths with the{' '}
                    <a href="https://www.saratoga-springs.org/2425/Saratoga-Greenbelt-Trail">
                      Saratoga Greenbelt Trail
                    </a>
                    . Multi-use paths in Wilton connecting to this trail system would exponentially
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
                <h3>Local shops and restaurants</h3>
                <p>
                    Multi-use paths increase foot traffic in retail centers, delivering the customers that
                    local shops and restaurants need in order to thrive. <br />
                    <br />
                    <i>
                      Battle Lake, Minnesota (pop. 735) downsized a highway running through town.
                      Highway 78 — the town's Main Street — local citizens persuaded the agency to
                      do a road diet, narrowing the roadway from four lanes to three, and widening
                      the multi-use path through downtown. <b>Twenty-one new businesses opened in town</b>
                      , including a hotel and bakery, since the project was completed in 2014,
                      reports MnDOT.
                    </i>
                  </p>
          </Jumbotron>
        </div>

        <div id="Myths">
          <Jumbotron style={{ paddingTop: '0px' }}>
            <h1 className="sectionTitle">Myths</h1>

            <div className="mythBox">
              <h3>🚷 “No one will use the multi-use path.”</h3>
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
                Perhaps, or maybe they’re driving so much because there are no multi-use paths! Federal
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
                Not necessarily. Multi-use paths can be curved to avoid trees. In fact, protecting a tree
                is one of the few reasons for a multi-use paths to deviate from a direct route.
              </p>
            </div>
            <div className="mythBox">
              <h3>🏠 "A multi-use path will take land from my lawn"</h3>
              <p>
                Many homeowners don’t realize how far from the curb their private property line
                actually extends. There’s often enough of a public right-of-way easement in place to
                create a multi-use path without infringing in any way on a property owner’s land
              </p>
            </div>
            <div className="mythBox">
              <h3>🚶 “People will walk too close to my house.”</h3>

              <p>
                There’s little difference between what passersby can see from a multi-use path versus what
                they can already see from their cars or by walking along the edge of the street. Any
                nearness added by a multi-use path would likely be as little as a just a few feet.
              </p>
            </div>
            <div className="mythBox">
              <h3>🔐 "Multi-use paths increase crime."</h3>
              <p>
                {' '}
                Actually, increased pedestrian activity puts more eyes on the street and creates
                safety in numbers, which deters and reduces criminal activity
              </p>
              <h3>💰 “Tax dollars are better spent on other needs.” </h3>
            </div>
            <div className="mythBox">
              <p>
                Since multi-use paths increase property values and tax revenues, they serve as an economic
                engine. Plus, multi-use paths maintenance costs are real estate tax-deductible (IRS
                Publication 530). multi-use paths are also safety investments (by bringing more eyes and
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
