import React, { Component } from 'react';
import { Parallax } from "react-parallax"
import Fade from "react-reveal/Fade"
import Container from "react-bootstrap/Container"
import CardsItem from './CardsItem'
import Image1 from "../../assets/background.jpg"
import Img1 from '../../assets/mood.png'
import Img2 from '../../assets/gernome.png'
import Img3 from '../../assets/planner.png'
import Img4 from '../../assets/weather.png'
import Img5 from '../../assets/pass.png'
import Img6 from '../../assets/bio.png'


class Cards extends Component {
    render() { 
        return(
            <div>
                 <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={Image1}
        bgImageAlt="lights"
        strength={-200}
    >
        <div>
      <Container className="container-box rounded">
        <Fade duration={500}>
        <h1 className="name">PROJECTS I WORKED ON</h1>
            <div className="container-fluid d-flex">
                <div className="row">
                    <div className="col-md-4">
                        <CardsItem imgsrc={Img1} title='moodSing' name='moodSing' link= "https://mrjcowman.github.io/moodSing"  text="moodSing uses the user's location, inputted mood, and music genre to generate a random playlist. The current weather of the location is used as a background."/>
                    </div>
                 
                 <div className="col-md-4">
                     <CardsItem imgsrc={Img4} title='Weather App' name="Check the Weather" link="https://ismahanj.github.io/weather-app/" text="This app allows users to input a city to view the current weather condition and a five day forecast" />
                 </div> 
                 <div className="col-md-4">
                     <CardsItem imgsrc={Img3} title='workday planner' name="Plan your day" link="https://ismahanj.github.io/workday-schedule/" text="Workday Planner helps you save hourly notes and reminders throughout a busy weekdays" />
                 </div> 
                 <div className="col-md-4">
                     <CardsItem imgsrc={Img5} title='Password Generator' name="Generate a Password" link="https://ismahanj.github.io/passward-generator/" text="After asking the user their preferences for a password, it generates a random password matching the criteria given" />
                 </div> 
                 <div className="col-md-4">
                     <CardsItem imgsrc={Img2} title='Gerome The Gnome' name="GeromeTheGnome" link= "https://gerome-the-gnome.herokuapp.com/" text= "Gerome the Gnome takes the user's inputted modifiers to generate a non-player character name that can be attached to main stats" />
                </div> 
                <div className="col-md-4">
                    <CardsItem imgsrc={Img6} title='Bio' name="Bio" link="https://ismahanj.github.io/responsive-bio/" text='A responsive bio displaying some projects I worked on' />

                </div>
                </div>

            </div>
      </Fade>
      </Container>
      </div>
      </Parallax>
      </div> 
            
            </div>
    
        ); 


    }
}
 
export default Cards;