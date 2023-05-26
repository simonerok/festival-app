import ArtistCard from "@/components/artists";
import styles from "@/styles/Home.module.css";
import React from 'react';
import ScheduleCard from "@/components/Jotu_modal";
import { useState } from 'react';
import { MyComponent } from "@/components/artists";

//setShowArtistCard funktionen updaterer valuen af showArtistCard
//useStat returnerer en værdi=tilstandsvariablen (showArtistCard) og en funktion (setShowArtistCard) der opdaterer showArtistCard. 
export default function ProgramHome({ bandData, scheduleData }) {
  const [showArtistCard, setShowArtistCard] = useState(true);

//handle funktionerne trigges ved klik på knapper og sætter værdi af tilstandsvariablen showArtistCard
  const handleArtistButtonClick = () => {
    setShowArtistCard(true);
  };
  const handleScheduleButtonClick = () => {
    setShowArtistCard(false);
  };

  //hvis tilstandsvariablen showArtistCard er true vises artistcard component
  //hvis tilstandsvariablen showArtistCard er false vises schedule component 
  return (
    <>
      <h1>PROGRAM</h1>
      <div className="nav_menu_program">
        <button className="schedule_button" onClick={handleScheduleButtonClick}>Schedule</button>
        <button className="artist_button" onClick={handleArtistButtonClick}>Artists</button>
      </div>

      {showArtistCard ? (
        <ArtistCard  scheduleData={scheduleData} bandData={bandData} />
      ) : (
        <ScheduleCard />
      )}
  
    </>
  );
}


export async function getServerSideProps() {
    const apiEndpoints = ["http://localhost:8080/bands", "http://localhost:8080/schedule", "http://localhost:8080/available-spots"];
  
    // mapper igennem hver array alt efter hvilket endpoint det er og fetcher
    const apiRequest = apiEndpoints.map((endpoint) => fetch(endpoint));
    // Promise.all venter på alle apiRequest er kørt igennem før den går videre.
    const [bandRes, scheduleRes, spotRes] = await Promise.all(apiRequest);
  
    const bandData = await bandRes.json();
    const scheduleData = await scheduleRes.json();
    const spotData = await spotRes.json();
  
    return {
      props: {
        bandData,
        scheduleData,
        spotData,
      },
    };
  }






