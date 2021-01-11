import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { FaMapMarkedAlt,FaMapSigns,FaMapMarked ,FaCar } from 'react-icons/fa';
import bg from './assets/images/bg.jpg';
import { ListGroup, ListGroupItem ,Badge } from 'reactstrap';
export default class Calculator extends Component {
   constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = {
          tollgates: null,
          amount: null,
         VClass: '',
         From: '',
         Via: '',
         To: '',
         errormessage: ''
      };
   }
   
   handleChange(event) {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {


      let amount= 120;
      let tollgates= 3;
      let total = amount * tollgates;
     this.setState({
         amount: amount,
         tollgates: tollgates,
         total: total,
         route1: 1,
         route2: 2,
         });
    event.preventDefault();
  }
   myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      let err = '';
      if (nam === "id") {
         if (val !="" && !Number(val)) {
            err = <strong>Your id must be a number</strong>;
         }
      }
      this.setState({errormessage: err});
      this.setState({[nam]: val});
   }

   
   render() {
      return (
          <>
          <div className="container con">
          <form onSubmit={this.handleSubmit}>
            <br/>
            <h1> Second</h1>
            <Row>
            <Col xs="3">
            <FormGroup>
            <Label className="lab" for="VClass"><FaCar/> Vehicle Type</Label>
            <Input type="select" name="VClass" id="VClass" value={this.state.VClass} onChange={this.handleChange}>
                <option>Light Weight Motor</option>
                <option>Heavy Vehicle</option>
                <option>Bus</option>
                <option>Mini Bus</option>
                <option>Haulage Truck</option>
            </Input>
            </FormGroup>
            </Col>
             <Col xs="3">
            <FormGroup>
            <Label className="lab" for="From"><FaMapMarkedAlt/> Departure</Label>
            <Input type="select" name="From" id="From" value={this.state.From} onChange={this.handleChange}>
                <option>Harare</option>
                <option>Mutare</option>
                <option>Masvingo</option>
                <option>Bulawayo</option>
                <option>Hwange</option>
            </Input>
            </FormGroup>
            </Col>
            <Col xs="3">
            <FormGroup>
            <Label className="lab" for="Via" ><FaMapSigns/> Via Route</Label>
            <Input type="select" name="Via" id="Via" value={this.state.Via} onChange={this.handleChange}>
                <option>Harare</option>
                <option>Mutare</option>
                <option>Masvingo</option>
                <option>Bulawayo</option>
                <option>Hwange</option>
            </Input>
            </FormGroup>
            </Col>
            <Col xs="3">
            <FormGroup>
            <Label className="lab" for="To" ><FaMapMarked/> Destination</Label>
            <Input type="select" name="To" id="To" value={this.state.To} onChange={this.handleChange}>
                <option>Harare</option>
                <option>Mutare</option>
                <option>Masvingo</option>
                <option>Bulawayo</option>
                <option>Hwange</option>
            </Input>
            </FormGroup>
            </Col>
            </Row>
            <hr/>
         <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="container">
       <hr/>
          <Row>
            <Col sm="4">
            
            <Card>
            
              <CardBody>
              <Label >Your Route</Label>
              <hr/>
                <Input value={this.state.From} disabled/><br/>
                <Input value={this.state.Via} disabled/><br/>
                <Input value={this.state.To} disabled/><br/>
              </CardBody>
            </Card>
            </Col>
            <Col sm="4" >
            <Card>
              
              <CardBody>
                <Label >Tollgates</Label>
                <hr/>
                <ListGroup>
                <ListGroupItem className="justify-content-between">{this.state.From} - {this.state.To}<Badge pill>{this.state.tollgates}</Badge></ListGroupItem>
               
                </ListGroup>
              </CardBody>
            </Card>
            </Col>
            <Col sm="4" >
            <Card>
              <CardBody>
                <Label >Tolling Cost</Label>
                <hr/>
                 <ListGroup>
                <ListGroupItem className="justify-content-between">{this.state.VClass}</ListGroupItem>
                <ListGroupItem className="justify-content-between">{this.state.total}</ListGroupItem>
                <ListGroupItem className="justify-content-between">{this.state.amount} * {this.state.tollgates}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            </Col>
          </Row>
      </div>
         </>
      );
   }
}