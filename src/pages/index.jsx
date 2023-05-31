import styles from "@/styles/Home.module.css";
import React from "react";
import { ProgramSection } from "@/components/programSection";
import { EventSection } from "@/components/eventSection";
import { MapSection } from "@/components/mapSection";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";


export function Overskrift() {
  return (
    <>
      <article className={styles.overskrift}>
        <Navigation></Navigation>
        <h1 className="fadeIn">FOO FESTIVALLL</h1>
      </article>
    </>
  );
}

/*giver tekster der skal animeres en class "fadeIN" 
og sætter elements til at være alle elementer med denne class*/

export default function Home({ bandData }) {
  useEffect(() => {
    const elements = document.querySelectorAll(".fadeIn");
    const fadeInElements = Array.from(elements);

    function fadeInHandler() {
      fadeInElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight) {
          element.classList.add("show");
        }
      });
    }

    window.addEventListener("scroll", fadeInHandler);
    fadeInHandler();

    return () => {
      window.removeEventListener("scroll", fadeInHandler);
    };
  }, []);

  return (
    <div className={styles.index_body}>
      <Overskrift></Overskrift>
      <ProgramSection className="fadeIn" bandData={bandData}></ProgramSection>
      <EventSection className="fadeIn"></EventSection>
      <MapSection className="fadeIn"></MapSection>
    </div>
  );
}

export async function getServerSideProps() {
  //const apiEndpoints = ["http://localhost:8080/bands", "http://localhost:8080/schedule", "http://localhost:8080/available-spots"];
  const apiEndpoints = ["https://nova-enchanted-confidence.glitch.me/bands", "https://nova-enchanted-confidence.glitch.me/schedule", "https://nova-enchanted-confidence.glitch.me/available-spots"];

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
