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
      let amount= null;
      let tollgates= null;
      
      if(this.state.VClass === 'Light motor-vehicles') {
            amount= 120;
            this.updateCost(amount);
        } else if(this.state.VClass === 'Heavy vehicles') {
           amount= 300;
            this.updateCost(amount);
        }
        else if(this.state.VClass === 'Buses') {
           amount= 240;
            this.updateCost(amount);
        }
        else if(this.state.VClass === 'Minibuses') {
           amount= 180;
            this.updateCost(amount);
        }
        else if(this.state.VClass === 'Haulage trucks') {
           amount= 590;
            this.updateCost(amount);
        } else {
            console.log('Error');
        }
      
    event.preventDefault();
  }
  updateCost(amount){
      this.getTollgates(amount);
  }
  updateData(tollgates , amount){
                this.setState({
                amount: amount,
                tollgates: tollgates,
                total: amount * tollgates,
            });
  }
  getTollgates(amount){
      let Departure = this.state.From;
      let Detour = this.state.Via;
      let Destination = this.state.To;
        let tollgates = null;
        let total = null;
      switch(Departure) {
      case 'Harare':
        if(Destination === 'Mazowe') {
            tollgates = 1;
            this.updateData(tollgates ,amount);
        } else if(Destination === 'Bindura') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Mt Darwin') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Murewa') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Nyamapanda') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Gweru') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Chegutu') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Kwekwe') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Karoi') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Chivhu') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }else if(Destination === 'Masvingo') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Gutu') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
         else if(Destination === 'Mvuma') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Mutare') {
           tollgates = 3;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Bulawayo') {
           tollgates = 4;
           this.updateData(tollgates ,amount);
        }
         else{
           alert("Try another Route");
        }
        break;
      case 'Bulawayo':
         if(Destination === 'Harare') {
            tollgates = 4;
            this.updateData(tollgates ,amount);
         }
         else if(Destination === 'Hwange') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Victoria Falls') {
           let tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Lupane') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Zvishavane') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Beightbridge') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        
        else{
           alert("Try another Route");
        }
        break;
      case 'Kwekwe':
         if(Destination === 'Bulawayo') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }else{
           alert("Try another Route");
        }
        break;
      case 'Kadoma':
         if(Destination === 'Bulawayo') {
          tollgates = 3;
          this.updateData(tollgates ,amount);
        }else{
           alert("Try another Route");
        }
        break;
      case 'Marondera':
         if(Destination === 'Harare') {
          tollgates = 1;
          this.updateData(tollgates ,amount);
        }else{
           alert("Try another Route");
        }
        break;
      case 'Gweru':
         if(Destination === 'Bulawayo') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }
        if(Destination === 'Kadoma') {
          tollgates = 1;
          this.updateData(tollgates ,amount);
        }
        if(Destination === 'Harare') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }
        if(Destination === 'Mutare') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }
        else{
           alert("Try another Route");
        }
        break;
      case 'Mutare':
        if(Destination === 'Harare') {
            tollgates = 3;
            this.updateData(tollgates ,amount);
        } else if(Destination === 'Marondera') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Rusape') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Bulawayo') {
           let tollgates = 4;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Norton') {
           tollgates = 3;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Masvingo') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Gweru') {
           tollgates = 5;
           this.updateData(tollgates ,amount);
        }
         else{
           alert("Try another Route");
        }
        break;
 
      case 'Masvingo':
         if(Destination === 'Gweru') {
          tollgates = 2;
          this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Beightbridge') {
           let tollgates = 1;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Bulawayo') {
           tollgates = 2;
           this.updateData(tollgates ,amount);
        }
        else if(Destination === 'Zvishavane') {
           tollgates = 1;
           this.updateData(tollgates ,amount);
        }else{
           alert("Try another Route");
        }
        break;
      
      default:
        alert("NUMBER NOT FOUND");
      }
 
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
            <Row>
            <Col xs="4">
            <FormGroup>
            <Label className="lab" for="VClass"><FaCar/> Vehicle Type</Label>
            <Input type="select" name="VClass" id="VClass" value={this.state.VClass} onChange={this.handleChange}>
                <option></option>
                <option>Light motor-vehicles</option>
                <option>Heavy vehicles</option>
                <option>Buses</option>
                <option>Minibuses</option>
                <option>Haulage trucks</option>
            </Input>
            </FormGroup>
            </Col>
             <Col xs="4">
            <FormGroup>
            <Label className="lab" for="From"><FaMapMarkedAlt/> Departure</Label>
            <Input type="select" name="From" id="From" value={this.state.From} onChange={this.handleChange}>
               <option></option>
               <option>Harare</option>
               <option>Bulawayo</option>
               <option>Mutare</option>
               <option>Marondera</option>
               <option>Gweru</option>
               <option>Chitungwiza</option>
               <option>Kwekwe</option>
               <option>Kadoma</option>
               <option>Masvingo</option>
               <option>Chinhoyi</option>
               <option>Norton</option>
               <option>Ruwa</option>
               <option>Chegutu</option>
               <option>Zvishavane</option>
               <option>Bindura</option>
               <option>Beitbridge</option>
               <option>Victoria Falls</option>
               <option>Redcliff</option>
               <option>Hwange</option>
               <option>Rusape</option>
               <option>Chiredzi</option>
               <option>Kariba</option>
               <option>Karoi</option>
               <option>Chipinge</option>
               <option>Gokwe</option>
               <option>Shurugwi</option>
               <option>Chirundu</option>
               <option>Beightbridge</option>
               <option>Mt Darwin</option>
               <option>Nyamapanda</option>
               <option>Murewa</option>
               <option>Mazowe</option>
               <option>Chivhu</option>
               <option>Gutu</option>
               <option>Buhera</option>
               <option>Mvuma</option>
               <option>Lupane</option>
               <option>Plumtree</option>
            </Input>
            </FormGroup>
            </Col>
            
            <Col xs="4">
            <FormGroup>
            <Label className="lab" for="To" ><FaMapMarked/> Destination</Label>
            <Input type="select" name="To" id="To" value={this.state.To} onChange={this.handleChange}>
                <option></option>
                <option>Harare</option>
               <option>Bulawayo</option>
               <option>Mutare</option>
               <option>Marondera</option>
               <option>Gweru</option>
               <option>Chitungwiza</option>
               <option>Kwekwe</option>
               <option>Kadoma</option>
               <option>Masvingo</option>
               <option>Chinhoyi</option>
               <option>Norton</option>
               <option>Ruwa</option>
               <option>Chegutu</option>
               <option>Zvishavane</option>
               <option>Bindura</option>
               <option>Beitbridge</option>
               <option>Victoria Falls</option>
               <option>Redcliff</option>
               <option>Hwange</option>
               <option>Rusape</option>
               <option>Chiredzi</option>
               <option>Kariba</option>
               <option>Karoi</option>
               <option>Chipinge</option>
               <option>Gokwe</option>
               <option>Shurugwi</option>
               <option>Chirundu</option>
               <option>Beightbridge</option>
               <option>Mt Darwin</option>
               <option>Nyamapanda</option>
               <option>Murewa</option>
               <option>Mazowe</option>
               <option>Chivhu</option>
               <option>Gutu</option>
               <option>Buhera</option>
               <option>Mvuma</option>
               <option>Lupane</option>
               <option>Plumtree</option>
            </Input>
            </FormGroup>
            </Col>
            </Row>
            <hr/>
            <input className="btn btn-success btn-sm" type="submit" value="Submit" />
         <hr/>
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
               
                <ListGroupItem className="justify-content-between">{this.state.amount} * {this.state.tollgates}</ListGroupItem>
                 <ListGroupItem className="justify-content-between"><strong>ZWL${this.state.total}</strong></ListGroupItem>
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