import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { GetServerSideProps } from "next";
import React, { useState, useEffect } from 'react';
import Banner from "./banner";
import LandingButton from "./landingButton";





export function ProgramSection({bandData}){
    return(
      <>
      <div className={styles.programContainer}>
        <h2 className="fadeIn">THE PROGRAM IS READY NOW! </h2>
        <Banner bandData={bandData}></Banner>
      <Link href='/program'>
        <LandingButton className={styles.programKnap}>Check it out</LandingButton>
      </Link>
    </div>
    </>
    );
  }




  
  