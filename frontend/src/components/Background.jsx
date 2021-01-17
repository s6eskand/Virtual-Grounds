import React from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import map from '../img/map.png';
import cal from '../img/cal.png';
import list from '../img/list.png';
import prod from '../img/prod.png';
import job from '../img/job.png';
import disc from '../img/disc.png';

import { Link } from 'react-router-dom';

function Background(props) {

    return(
      <div>
      <Card className="bg-dark text-white">
        <Card.Img src= {map} alt="Card image" style={{backgroundColor: 'white'}}/>
        <Card.ImgOverlay>
          
          <Card.Title >Card title</Card.Title>
          <div className="text-center" >
          <Card.Title  className="maintitle" style={{ fontSize: '10vh', fontWeight:'bold' }}> 
            Virtual Grounds
          </Card.Title>
          <Card.Text style={{ fontSize: '3vh', color: '#6B6C70' }}>The all-in-one virtual space</Card.Text>
          </div>
          <div >
            <Card className='space-card' style={{backgroundColor: 'rgba(0, 0, 0, 0)', width:'50px'}}>

            </Card >
            <CardGroup style={{ width: '40vh', marginLeft:'39%'}}>
              <Card className = 'button-center' style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}}>
              <Button variant="dark"><Link style={{color: '#fff'}} to="/login">Log In</Link></Button>{' '}
              </Card>
              <Card className = 'button-center' style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}}>
              <Button variant="dark"><Link style={{color: '#fff'}} to="/register">Sign Up</Link></Button>{' '}
              </Card>
            </CardGroup>
            <Card className='space-card'>
            </Card>
          </div>


          <div className = 'center' style={{ outline: 'none'}}>
            <CardGroup style={{ width: '70rem', justifyContent: 'center' }} className="text-center center">
              <Card style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}} >
                <Card.Img src= {cal} alt="Card image" style={{width: '40%', marginLeft:'30%'}}/>
                <Card.Text style={{ fontSize: '2vh', color: '#6B6C70', fontWeight:'bold'  }}>Interactive Calendars</Card.Text>
              </Card>
              <Card style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}}>
              <Card.Img src= {list} alt="Card image"  style={{width: '40%', marginLeft:'30%'}}/>
                <Card.Text style={{ fontSize: '2vh', color: '#6B6C70', fontWeight:'bold'  }}>Planning Boards</Card.Text>
              </Card>
              <Card style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}}>
              <Card.Img src= {prod} alt="Card image" style={{width: '40%', marginLeft:'30%'}}/>
                <Card.Text style={{ fontSize: '2vh', color: '#6B6C70', fontWeight:'bold'  }}>Productivity Analytics</Card.Text>
              </Card>
              <Card style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}}> 
              <Card.Img src= {job} alt="Card image" style={{width: '40%', marginLeft:'30%'}}/>
                <Card.Text style={{ fontSize: '2vh', color: '#6B6C70', fontWeight:'bold'  }}>Job Search</Card.Text>
              </Card>
   
              <Card style={{backgroundColor: 'rgba(0, 0, 0, 0)', border: 'none'}}> 
              <Card.Img src= {disc} alt="Card image" style={{width: '40%', marginLeft:'30%'}}/>
                <Card.Text style={{ fontSize: '2vh', color: '#6B6C70', fontWeight:'bold'  }}>Discovery Mode</Card.Text>
              </Card>
            </CardGroup>
          </div>
        </Card.ImgOverlay>
      </Card>

      </div>

    )
}


export default Background;