import React from 'react';
import './style.scss';

import ServiceButton from './components/ServiceButton';
import Greeting from './components/Greeting';

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

const name = "Ben";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><Greeting/>, {name || "user"}</h1>
      </header>
      <section>
        <header>SearchBar</header>
        <SearchBar/>
      </section>
      <section>
        <header><h3>wintermute</h3></header>
        <div className="service-buttons">{serviceButtons}</div>
      </section>
      
    </div>
  );
}

export default App;

function SearchBar() {
  return 
}

function Clock() {
  return ( 
    <div>
      {new
       Date().toLocaleDateString()} 
    </div>
  )
}

