import React from 'react';
import './style.scss';

// import ServiceButton from 'components/ServiceButton';
const services = [
  {
    "name" : "Plex",
    "link" : "http://wintermute.local:32400/",
    "image" : "/images/plex-256.png"

  },
  {
    "name"  : "Sonarr",
    "link"  : "http://wintermute.local:8989/",
    "image" : "/images/sonarr-256.png"
  },
  {
    "name" : "Radarr",
    "link" : "http://wintermute.local:7878/",
    "image" : "/images/radarr-256.png"
  },
  {
    "name" : "Transmission",
    "link" : "http://wintermute.local:9091/",
    "image" : "/images/transmission-256.png"
  },

]

const serviceButtons = services.map( service => {
  return <ServiceButton 
    label={service.name} 
    linkUrl={service.link}
    image={service.image}
  />;
});



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Clock /></h1>
        
      </header>
      <div className="service-buttons">
        {serviceButtons}
      </div>
      
    </div>
  );
}

export default App;

function ServiceButton(props) {
  return (
      <div className="button service-button">
          <img className="logo" src={props.image}/>
          <a href={props.linkUrl}>{props.label}</a>
      </div>
  )
}

function Clock() {
  return ( 
    <div>
      {new
       Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}
    </div>
  )
}