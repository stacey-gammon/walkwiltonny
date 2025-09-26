import { useEffect } from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import Head from 'next/head';

export default function Success() {
  useEffect(() => {
    // Track form submission success
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_success', {
        event_category: 'engagement',
        event_label: 'form_submission'
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Thank You - Walk and Bike Wilton Project</title>
        <meta name="description" content="Thank you for your message. We'll be in touch soon about the Walk and Bike Wilton Project." />
      </Head>
      
      <div className="mainBody">
        <Container className="py-5">
          <div className="text-center">
            <Card className="content-card mx-auto" style={{ maxWidth: '600px' }}>
              <Card.Body className="py-5">
                <div className="mb-4">
                  <i className="fas fa-check-circle text-success" style={{ fontSize: '4rem' }}></i>
                </div>
                <h1 className="text-primary mb-3">Form Successfully Submitted!</h1>
                <p className="lead mb-4">
                  Thank you for your interest in the Walk and Bike Wilton Project. 
                  We'll be in touch soon!
                </p>
                <p className="text-muted mb-4">
                  Your support helps us build a more connected and walkable community in Wilton, NY.
                </p>
                <Link href="/">
                  <Button variant="primary" size="lg" className="btn-primary">
                    <i className="fas fa-arrow-left me-2"></i>
                    Return to Homepage
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </div>
    </>
  );
}
