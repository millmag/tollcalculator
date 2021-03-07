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

apiGetToll(amount){
      let Departure = this.state.From;
      let Detour = this.state.Via;
      let Destination = this.state.To;

      fetch("http://127.0.0.1:8000/api/tollquerys/" + Departure )
      .then(response => response.json())
      .then((result) =>{
         if(result.length > 0){
            for(let i= 0; i < result.length ; i++){
              if(result[i].city_via === Detour){
                 if(result[i].city_to === Destination){
                  console.log(result[i]);
                  let dt = result[i].city_via;
                  this.updateData(result[i].number_of_tollgates ,dt ,amount);
                 }
                 else{
                 console.log('No Valid Destination');
               }
              }
              else{
                 console.log('No Detour');
                 if(result[i].city_to === Destination){
                  console.log(result[i]);
                  let dt = result[i].city_via;
                  this.updateData(result[i].number_of_tollgates ,dt ,amount);
                 }
              }
            }
            
         }
      })
      .catch(error => console.log('error', error));
  }
   handleSubmit(event){
      let amount= null;
      let tollgates= null;
      this.handleData();
      event.preventDefault();
   }
  handleData() {
      let amount= null;
      let tollgates= null;
      if(this.state.VClass === 'Light motor-vehicles') {
            amount= 164;
            this.updateCost(amount);
            
        } else if(this.state.VClass === 'Heavy vehicles') {
           amount= 410;
            this.updateCost(amount);
        }
        else if(this.state.VClass === 'Buses') {
           amount= 328;
            this.updateCost(amount);
        }
        else if(this.state.VClass === 'Minibuses') {
           amount= 246;
            this.updateCost(amount);
        }
        else if(this.state.VClass === 'Haulage trucks') {
           amount= 820;
            this.updateCost(amount);
        } else {
            console.log('Error');
        }
      
  }
  updateCost(amount){
      this.apiGetToll(amount);
  }
  updateData(tollgates ,detour, amount){
     let total = amount * tollgates;
                this.setState({
                amount: amount,
                tollgates: tollgates,
                total: total,
                detour: detour,
            });
            
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
            <Col xs="3">
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
             <Col xs="3">
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
                     <option>Beightbridge</option>
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
            <Col xs="3">
               <FormGroup>
                  <Label className="lab" for="From"><FaMapMarkedAlt/> Detour</Label>
                  <Input type="select" name="Via" id="Via" value={this.state.Via} onChange={this.handleChange}>
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
                     <option>Beightbridge</option>
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
            <Col xs="3">
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
                  <option>Beightbridge</option>
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
                <Input value={this.state.detour} disabled/><br/>
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
                <ListGroupItem className="justify-content-between">{this.state.From} - {this.state.detour}- {this.state.To}<Badge pill>{this.state.tollgates}</Badge></ListGroupItem>
               
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