import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import {  } from '../redux/actions/recipes-actions'; //make login actions


class Login extends Component {
  state= {
    id: ''
  }

  render(){

    return (
      <Form>
        <Row form>
          <Col md={3} style={{margin:'0 auto', backgrounColor:'red'}}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="" />
            </FormGroup>
            <Button onSubmit="">Login</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default connect(null, {})(Login);
