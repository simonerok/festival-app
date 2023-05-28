import styles from "@/styles/Home.module.css";
import React from 'react';
import Link from 'next/link';
import Banner from "@/components/banner";
import { ProgramKnap } from "@/components/programKnap";
import { EventKnap } from "@/components/eventsKnap";
import { MapKnap } from "@/components/mapKnap";
import { useEffect } from 'react';


export function Overskrift(){
  return(
    <article className={styles.overskrift}>
    <h1 className="fadeIn">FOO FESTIVALLL</h1>
  </article>
  );
}


export default function Home({ bandData }) {
  useEffect(() => {
    const elements = document.querySelectorAll('.fadeIn');
    const fadeInElements = Array.from(elements);

    function fadeInHandler() {
      fadeInElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
          element.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', fadeInHandler);
    fadeInHandler();

    return () => {
      window.removeEventListener('scroll', fadeInHandler);
    };
  }, []);

  return (
    <>
      <Overskrift ></Overskrift>
      <ProgramKnap className="fadeIn"></ProgramKnap>
      <Banner className="fadeIn" bandData={bandData}></Banner>
      <EventKnap className="fadeIn"></EventKnap>
      <MapKnap className="fadeIn"></MapKnap>
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