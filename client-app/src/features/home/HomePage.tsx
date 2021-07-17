import { observer } from 'mobx-react-lite';
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store';
import LoginForm from '../users/LoginForm';
import './HomePage.css';

export default observer(function HomePage() {
    const {userStore, modalStore} = useStore();
    return (
       <Segment inverted textAlign="center" vertical className="masthead">
           <Container text>
                <Header as='h1' inverted>
                    <Image size="massive" src="/assets/logo.png" alt="CodeDancing Activities" style={{marginBottom: 12}} />
                    CodeDancing <br />
                    ⛹️‍♀️ 🤺 🤾‍♂️ 🏌️‍♀️ 🏇 🧘‍♀️ 🏄‍♂️ 🏊‍♀️ 🤽‍♀️ 🚣‍♂️ 🧗‍♀️ 🚴‍♂️ <br/>
                    🏆
                </Header>
                {userStore.isLoggedIn ? (
                    <>
                        <Header as="h2" inverted content="Welcome to CodeDancing Activities" />
                        <Button as={Link} to="/activities" size='huge' inverted>
                            Go To Activities
                        </Button>
                    </>
                    
                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} size='huge' inverted>
                            Login!
                        </Button>
                        <Button onClick={() => modalStore.openModal(<h1>Register</h1>)} size='huge' inverted>
                            Register!
                        </Button>
                    </>
                )}
           </Container>
       </Segment>
    )
});
