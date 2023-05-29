import styles from "@/styles/Home.module.css";
import React, { useState } from 'react';


const Events = () => {
    const [showMad, setShowMad] = useState(false);
    const [showFest, setShowFest] = useState(false);
    const [showDrikke, setShowDrikke] = useState(false);
    const [showKrea, setShowKrea] = useState(false);
  
    // Add event handlers to toggle the visibility of each div
    const toggleMad = () => setShowMad(!showMad);
    const toggleFest = () => setShowFest(!showFest);
    const toggleDrikke = () => setShowDrikke(!showDrikke);
    const toggleKrea = () => setShowKrea(!showKrea);
  
    return (
        <>
        <h1 className={styles.eventOverskrift}>HAPPENING THIS WEEK</h1>
      <section className={styles.dropDownContainer}>
        <div className={styles.eventMad} onClick={toggleMad}>
          <h2>FOOD</h2>
        </div>
        {showMad && (
          <div className={styles.eventDetails}>
            <p>Mad 1 details</p>
            <p>Mad 2 details</p>
            <p>Mad 3 details</p>
          </div>
        )}
  
        <div className={styles.eventFest} onClick={toggleFest}>
          <h2>DRINKS</h2>
          
        </div>
        {showFest && (
          <div className={styles.eventDetails}>
            <p>Fest 1 details</p>
            <p>Fest 2 details</p>
            <p>Fest 3 details</p>
          </div>
        )}
  
        <div className={styles.eventDrikke} onClick={toggleDrikke}>
          <h2>EVENTS</h2>
        </div>
        {showDrikke && (
          <div className={styles.eventDetails}>
            <p>Drik 1 details</p>
            <p>Drik 2 details</p>
            <p>Drik 3 details</p>
          </div>
        )}
  
        <div className={styles.eventKrea} onClick={toggleKrea}>
          <h2>POP UP</h2>
        </div>
        {showKrea && (
          <div className={styles.eventDetails}>
            <p>Krea 1 details</p>
            <p>Krea 2 details</p>
            <p>Krea 3 details</p>
          </div>
        )}
      </section>
      </>
    );
  };
  
  export default Events;
       
