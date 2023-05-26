import styles from "@/styles/Home.module.css";
import React from 'react';
import Link from 'next/link';
import Banner from "@/components/banner";



export function Overskrift(){
  return(
    <article className={styles.overskrift}>
    <h1>FOO FESTIVALLL</h1>
    <img src="/Shade.svg" className={styles.shade} alt="Shade" />
  </article>
  );
}

export function ProgramKnap(){
  return(

    <Link href='/program'>
        <button className={styles.programKnap}>PROGRAM <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg></button>
</Link>
  
  );
}
export function EventKnap(){
  return(
    <Link href='/events'>
    <button className={styles.eventKnap}> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>EVENTS</button>
  </Link>
  );
}
export function MapKnap(){
  return(
    <Link href='/map'>
    <button className={styles.mapKnap}>
      MAP <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
</svg> </button>
  </Link>
  );
}



export default function Home({ bandData }) {
  return (
    <>
    <Overskrift></Overskrift>
    <Banner bandData={bandData}></Banner>
    <ProgramKnap></ProgramKnap>
    <EventKnap></EventKnap>
    <MapKnap></MapKnap>  
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