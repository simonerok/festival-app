import React from 'react';
import { FestivalMap } from "./festivalMap";
import FestivalPage from "@/pages/map";
import { GetServerSideProps } from "next";
import styles from "@/styles/Home.module.css";



export function ScheduleCardJOTU({scheduleData}){
    console.log("jotunScene");
    return (
            <>
                <div className={styles.scene_modal_sceneNavnOgTelt}>
                    <img className={styles.scene_modal_telt} src="telt2.svg" alt="Telt2" />
                    <h1>JOTU SCENE</h1>
                </div>

                <div>
                {scheduleData.Jotunheim.mon.map((scene) => {
                    if (scene.act !== "break") {
                        return (
                            <section key={scene.start} value={scene.end}>
                                 <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                                 <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
                              
                            </section>
                        );
                    }
                    return null;
                })}
            </div>

            <div className={styles.scene_modal_tuesday}>
            {scheduleData.Jotunheim.tue.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                    <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
            
                </section>
            ))}
            </div>

             <div className={styles.scene_modal_wednesday}>
            {scheduleData.Jotunheim.wed.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                    <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
            
                </section>
            ))}
            </div>

            <div className={styles.scene_modal_thursday}>
            {scheduleData.Jotunheim.thu.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                    <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
            
                </section>
            ))}
            </div>

            <div className={styles.scene_modal_friday}>
            {scheduleData.Jotunheim.fri.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                    <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
            
                </section>
            ))}
            </div>

            <div className={styles.scene_modal_saturday}>
            {scheduleData.Jotunheim.sat.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                    <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
            
                </section>
            ))}
            </div>
            
            <div className={styles.scene_modal_sunday}>
            {scheduleData.Jotunheim.sun.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3 className={styles.scene_modal_BandName}>{scene.act}</h3>
                    <p className={styles.scene_modal_tidspunkt}>From: {scene.start} - {scene.end}</p>
            
                </section>
            ))}
            </div>

        </>
        
    );
}



  