import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import './HomePage.css';

export default function HomePage() {
    return (
       <Segment inverted textAlign="center" vertical className="masthead">
           <Container text>
                <Header as='h1' inverted>
                    <Image size="massive" src="/assets/logo.png" alt="CodeDancing Activities" style={{marginBottom: 12}} />
                    CodeDancing Activities
                </Header>
                <Header as="h2" inverted content="Welcome to CodeDancing Activities" />
                <Button as={Link} to="/login" size='huge' inverted>
                    Login!
                </Button>
           </Container>
       </Segment>
    )
}
