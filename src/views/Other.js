import React from "react";
import "../css/App.css";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { ContentBoxMain, ContentBoxSecondary, ImageBox, Slideshow, VideoBox, Collapse } from "../components/Content";
import CapacitorsPresentation from "../components/CapacitorsPresentation";


function Other() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Card
          id="capacitorsPresentation"
          title="Capacitors in Guitars"
          content={"This was a presentation I gave in my high school physics class about the uses of capacitors in guitars and other guitar-related equipment equipment."}
          redirectURL={"/capacitorsPresentation"}
        />
      </div>
      <iframe src="https://onedrive.live.com/embed?resid=192EE6D532880D9C%2156873&amp;authkey=!AFuBGqNpiGYsVy8&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="90%" frameborder="1">
        This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.
      </iframe>
      
      <br/><br/><br/>
      <Footer />
    </div>
  );
}

export default Other;