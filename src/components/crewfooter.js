import classes from './crewfooter.module.css';
import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import * as Data from '../mockdata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Crewfooter = () => {
  console.log("data",Data);
  const [services,setService] = useState(Data.serviceData);
  const [development,setDevelopment] = useState(Data.developmentData);
  const techcrewText = "is a US based IT consulting services and products company that focuses on providing the best business integration service through the application of technology.";
  const contactInfo = [
    {text : "12591 Akenside Rd,Frisco, TX-75035.",image : "fa-solid fa-location-dot"},
    {text : "info@ptechcrew.com",image : "fa-solid fa-envelope"},
    {text : "+1 469 558 1216",image : "fa-solid fa-phone"}
  ]
 
  return (
   <div className={classes.footer}>
      <Container className={classes['footer-container']}>
        <Row className="justify-content-md-center">
          <Col xs="12" lg="3">
          <img src="footer-logo.png" alt="techcrew" width="150" height="100"/>
          <div>{techcrewText}</div>
          <div>
            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
          </div>
          </Col>
          <Col xs="12" lg="3">
             <h6 className={classes['service']}>Services</h6>
             <Stack gap={services.length}>
                <ul className={classes['list-elements']}>
                  {
                    services.map((service) => {
                      return <li className={classes['service-name']}>{service.name}</li>
                    })
                  }
                </ul>
             </Stack>
          </Col>
          <Col xs="12" lg="3">
            <h6 className={classes['service']}>Development</h6>
            <Stack gap={development.length}>
              <ul className={classes['list-elements']}>
                {
                  development.map((development) => {
                    return <li className={classes['development-name']}>{development.name}</li>
                  })
                }
              </ul>
            </Stack>
          </Col>
          <Col xs="12" lg="3">
            <h6>CONTACT ADDRESS</h6>
            <h6>PTechCrew LLC</h6>
            <ul className={classes['list-elements']}>
              {
                contactInfo.map((object) => {
                  return (
                  <li className={classes['contact-section']}>
                      <span className={classes['contact-image']}><FontAwesomeIcon  icon={object.image}/></span>
                      {object.text}
                  </li> 
                )})
              }
            </ul>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-md-center">
          <Col  md="auto" className={classes['copyright-text']}>© Copyright 2022 PTechCrew LLC. All Rights Reserved.</Col>
        </Row>
    
    </Container>
   </div>
  );
}

export default Crewfooter;