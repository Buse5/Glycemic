import React from 'react'
import { Button, Form, Segment, Divider, Grid, Header } from 'semantic-ui-react'
import NavBar from './NavBar';
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`${zoomIn}`
const AnimateDiv = styled.div`
  animation: forwards 2s ${animation};
`;
function Login() {
    return (<>
        <NavBar></NavBar>
        <br></br>
      <h1></h1>
      <Header as="h2"><AnimateDiv>
        <h1 style={{ textAlign: "center", color: "tomato", textShadow: "initial", fontFamily: "monospace", fontSize: 50 }}> LOGIN </h1>
      </AnimateDiv></Header>
        <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='E-mail'
            placeholder='E-mail'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
            </>
    )
}
export default Login;