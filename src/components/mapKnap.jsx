import styles from "@/styles/Home.module.css";
import Link from 'next/link';

export function MapKnap(){
    return(
        <div className={styles.mapContainer}>
      <Link href='/map'>
      <button className={styles.mapKnap}>
        MAP </button>
    </Link>
    </div>
    );
  }