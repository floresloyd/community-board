import React from "react";
import Event from "./Event";

const Board = () => {
  return (
    <>
      <div className="Board">
        <Event
          link="/src/assets/citi-bike.jpeg"
          alt="citi-bike"
          event="Citi Bike Ride"
          description="Grab a Citi Bike at one of our three docks for a jaunt across the Island!"
          color="pink"
        />
        <Event
          link="/src/assets/climbing-boulder.jpg"
          alt="climbing-boulder"
          event="Climbing Boulder"
          description="The Climbing Boulder has several different climbing routes with varying degrees of difficulty."
          color="pink"
        />
        <Event
          link="/src/assets/blazing-saddles.jpg"
          alt="blazing-saddles"
          event="Blazing Saddles"
          description="Blazing Saddles is the best way to have fun
        and explore everything the Island has to offer."
          color="pink"
        />
        <Event
          link="/src/assets/lavander-field.jpg"
          alt="lavander-field"
          event="Lavander Field"
          description="Visitors can stroll through rows of fragrant lavender."
          color="pink"
        />
      </div>{" "}
      <div className="Board">
        <Event
          link="/src/assets/river-years.jpg"
          alt="river-years"
          event="RIVER YEARS: A BLACK GOTHAM EXPERIENCE"
          description="Riv­er Years is a free, self-guid­ed Black Gotham Expe­ri­ence audio tour writ­ten by Kamau Ware on the occa­sion of 'Mov­ing Chains
          '."
          color="blue"
        />
        <Event
          link="/src/assets/historic-photo-tour.jpg"
          alt="historic-photo"
          event="Urban Archive Self-Guided Historic Photo Tours"
          description="Stroll across Governors Island while exploring its history through stunning historical
          photographs on Urban Archive."
          color="blue"
        />
        <Event
          link="/src/assets/walking-tour.png"
          alt="walking-tours"
          event="Friends of Governors Island Volunteer Walking Tours"
          description="Tour the Island with a Friends of Governors Island volunteer docent to learn about its
          transformation from military post to New York’s newest cultural destination."
          color="blue"
        />
      </div>
      <div className="Board">
        <Event
          link="/src/assets/play-ground.jpg"
          alt="play-ground"
          event="play:groundNYC’s The Yard Adventure Playground"
          description="Kids can play, imagine, and create their own fun at The Yard, a 20,000 sq ft adventure
          playground!."
          color="green"
        />
        <Event
          link="/src/assets/grove-sheep.jpg"
          alt="hammock-grove-sheep"
          event="Hammock Grove Sheep"
          description="Five sheep from Friends of Tivoli Lake Preserve and Farm are living
          in Hammock Grove through the summer to help control invasive species like phragmites and
          mugwort."
          color="green"
        />
        <Event
          link="/src/assets/retreats.png"
          alt="collective-retreats"
          event="Collective Retreats"
          description="Collective Retreats offers unique, seasonal lodging on Governors Island, offering both full hotel-
          style service and premium select service accommodations as well as experiential dining."
          color="green"
        />
      </div>
    </>
  );
};

export default Board;
