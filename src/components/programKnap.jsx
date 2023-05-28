import Link from "next/link";
import styles from "@/styles/Home.module.css";




export function ProgramKnap(){
    return(
      <>
      <div className={styles.programContainer}>
        <h2 className="fadeIn">THE PROGRAM IS READY NOW! </h2>
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