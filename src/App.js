import React, { Component } from 'react';
import About from './Components/About'
import Experience from './Components/Experience';
import Education from './Components/Education';
import Certificate from './Components/Certificate';
import Skills from './Components/Skills';
import  Contact from './Components/Contact'
import './App.css'
import Reference from './Components/Reference';
class App extends Component {
  render() {

    const person = {
      
      name: 'FELEX ONYANGO',
      profession: 'Fullstack Software Developer',
      address: 'Nairobi Kenya.',
      social: [
        
        
        {name: 'twitter', url: 'https://twitter.com/OnyangoFelex'},
        {name: 'github', url: 'https://github.com/Felexonyango'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/felex-onyango-912359201/'},
        {name:'facebook',url:'https://web.facebook.com/felix.onyango.3150'}
     
      ],
      experience: [
        {jobTitle: 'Software Developer', company: 'Brainverse software technology Ltd', startDate: 'January 2021', endDate: 'August2021', jobDescription: 'Former Intern  software developer ,building  Embedded systems and SaaS products'}
      ],
      education: [
        {degree: 'Bachelor of Information and Technology', institution: 'Laikipia unversity', startDate: 'September 2018', endDate: 'Present', description: 'Undertaking undergraduate studies  with the lean on software development'},
        
      ],
      certificate: [
        {name: 'Frontend Developer', institution: 'Udemy', date: 'Jan 2019', description: 'I started my journey at Udemy  and awarded a certificate as a Front end developer with lean on React and NexJs .' },
        {name: 'Backend Developer', institution: 'Udemy', date: 'Jan 2020', description: 'I was awarded a certificate as a  Backend Developer with lean on Nodejs Express Js.' }
      ],
      skills: [
        {name: 'HTML5'},
        {name: 'CSS'},
        {name:'React'},
        {name:"React testing library"},
        {name:'NextJs'},
        {name:'Nodejs'},
        {name:'Express'},
        {name:'MongoDB'},
        {name:'Heruko $ Netlify'},
        {name:'Git'},
        {name:'Linux'},
        {name:'Docker'},
        {name:'Ngnix'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
                <Contact/>
                <Reference/>
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;