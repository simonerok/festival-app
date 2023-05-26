import React, { useState } from 'react';
import FestivalMap from '@/components/festivalMap';
import { ScheduleCardMID } from '@/components/Mid_modal';
import { ScheduleCardJOTU } from '@/components/Jotu_modal';
import { ScheduleCardVAN } from '@/components/Van_modal';
import styles from "@/styles/Home.module.css";


export default function FestivalPage ({scheduleData}) {
  const [showMap, setShowMap] = useState(true);
  const [selectedTent, setSelectedTent] = useState(null);
 
  const handleTeltClick = (tent) => {
    setSelectedTent(tent);
    setShowMap(false);
  };
  

  return (
    <>
      <div className={styles.map_top}>
        <h1 className={styles.map_overskrift}>FOO FESTIVAL MAP </h1>
        <p className={styles.map_underOverskrift}>click on the tents to see schedule </p>
      </div>
      <div>
        {showMap ? (
          <FestivalMap onTeltClick={handleTeltClick} />
        ) : selectedTent === 'Telt1' ? (
          <ScheduleCardMID scheduleData={scheduleData} />
        ) : selectedTent === 'Telt2' ? (
          <ScheduleCardJOTU scheduleData={scheduleData} />
        ) : selectedTent === 'Telt3' ? (
          <ScheduleCardVAN scheduleData={scheduleData} />
        ) : null}
      </div>
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

