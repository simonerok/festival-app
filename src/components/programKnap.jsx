import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import React, { useState, useEffect } from 'react';




export function ProgramKnap({bandData}){
    return(
      <>
      <div className={styles.programContainer}>
        <h2 className="fadeIn">THE PROGRAM IS READY NOW! </h2>
        <ArtistCard bandData={bandData}></ArtistCard>
      <Link href='/program'>
        <button className={styles.programKnap}>Check it out</button>
      </Link>
    </div>
    <div className={styles.imgContainer}>
    <img src="/skygge.svg" alt="skygge" className={styles.skyggeProgram} />
    </div>
    </>
    
    );
  }




  export default function ArtistCard({ bandData }) {
    const [displayedActs, setDisplayedActs] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      setDisplayedActs(bandData.slice(0, 6));
      setCurrentIndex(0);
    }, [bandData]);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex < displayedActs.length) {
            return nextIndex;
          } else {
            clearInterval(timer);
            return prevIndex;
          }
        });
      }, 1000); // Delay between displaying each band name (1 second in this example)
  
      return () => clearInterval(timer);
    }, [displayedActs]);
  
    return (
      <div className={styles.artister_forside}>
        {displayedActs.slice(0, currentIndex + 1).map((perBand) => (
          <section key={perBand.act} value={perBand.act}>
            <p className={styles.artist_forside}>{perBand.name}</p>
          </section>
        ))}
      </div>
    );
  }
  