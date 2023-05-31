import styles from "@/styles/Home.module.css";
import React, { useState } from 'react';
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer";


export default function Events () {
      return (
        <section className="body_event">
        <Navigation></Navigation>
        <h1 className={styles.eventOverskrift}>EVENTS THIS WEEK</h1>
        <article className={styles.eventCard}>
          <img src="/baggrundPinkOrange.jpg" alt="billede1" />
          <h3> overskrift</h3>
          <p>indsæt en kort brødtekst her</p>
        </article>
        <article className={styles.eventCard}>
          <img src="/baggrundPinkOrange.jpg" alt="billede1" />
          <h3> overskrift</h3>
          <p>indsæt en kort brødtekst her</p>
        </article>
        <article className={styles.eventCard}>
          <img src="/baggrundPinkOrange.jpg" alt="billede1" />
          <h3> overskrift</h3>
          <p>indsæt en kort brødtekst her</p>
        </article>
        <Footer></Footer>
      </section>
    );
  }
       
