import React from 'react'
import { Button, Form, Segment, Header } from 'semantic-ui-react'
import NavBar from './NavBar';
import { zoomIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const animation = keyframes`${zoomIn}`
const AnimateDiv = styled.div`
  animation: forwards 2s ${animation};
`;
function ContactForm() {
    return (<>
        <NavBar></NavBar><div className="form">
        <br></br>
      <h1></h1>
          
                <Header as="h2"><AnimateDiv>
        <h1 style={{ textAlign: "center", color: "tomato", textShadow: "initial", fontFamily: "monospace", fontSize: 50 }}> CONTACT </h1>
      </AnimateDiv></Header>
     
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Form.TextArea label='About'
                    placeholder='Tell us more about you...' />
                <Button type='submit' color="blue">Submit</Button>
            </Form>
        </div></>
    )
}
export default ContactForm;