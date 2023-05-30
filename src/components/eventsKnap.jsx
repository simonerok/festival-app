import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import { useEffect } from 'react';

export function EventKnap(){
    return(
      <div className={styles.eventContainer}>
        <h2 className="fadeIn">THIS WEEKS EVENTS</h2>
        <Link href='/events'>
          <button className={styles.eventKnap}> SHOW ME</button>
        </Link>
      </div>
    );
  }