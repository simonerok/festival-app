import React, { useState } from 'react';
import styles from "@/styles/Home.module.css";

export function ScheduleCardMID({ scheduleData }) {
  const [currentDay, setCurrentDay] = useState('mon'); // Initial day

  const handleDayChange = (day) => {
    setCurrentDay(day);
  };

  const renderScene = (day) => {
    return scheduleData.Midgard[day]
      .filter((scene) => scene.act !== 'break')
      .map((scene) => (
        <section className={styles.navnTidContainer} key={scene.start} value={scene.end}>
       <p className={styles.scene_modal_tidspunkt}>
           {scene.start} <br/> {scene.end}
          </p>
          <div className={styles.column}>
    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
  </div>
   
        </section>
      ));
  };

  return (
    <div className={styles.scene_modal_body}>
      <div className={styles.scene_modal_sceneNavn}>
        <h1>MIDGARD</h1>
      </div>

      <div className={styles.scene_modal_knapper}>
        <button
          className={currentDay === 'mon' ? styles.active : ''}
          onClick={() => handleDayChange('mon')}
        >
          Monday
        </button>
        <button
          className={currentDay === 'tue' ? styles.active : ''}
          onClick={() => handleDayChange('tue')}
        >
          Tuesday
        </button>
        <button
          className={currentDay === 'wed' ? styles.active : ''}
          onClick={() => handleDayChange('wed')}
        >
          Wednesday
        </button>
        <button
          className={currentDay === 'thu' ? styles.active : ''}
          onClick={() => handleDayChange('thu')}
        >
          Thursday
        </button>
        <button
          className={currentDay === 'fri' ? styles.active : ''}
          onClick={() => handleDayChange('fri')}
        >
          Friday
        </button>
        <button
          className={currentDay === 'sat' ? styles.active : ''}
          onClick={() => handleDayChange('sat')}
        >
          Saturday
        </button>
        <button
          className={currentDay === 'sun' ? styles.active : ''}
          onClick={() => handleDayChange('sun')}
        >
          Sunday
        </button>
      </div>

      <div className={styles.scene_modal_day}>
        {renderScene(currentDay)}
      </div>
    </div>
  );
}


  