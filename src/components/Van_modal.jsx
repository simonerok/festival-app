import React from 'react';
import { FestivalMap } from "./festivalMap";
import FestivalPage from "@/pages/map";
import { GetServerSideProps } from "next";


export function ScheduleCardVAN({scheduleData}){
    return (
        <>
          <h1>VAN SCENE</h1>
            <div>
            {scheduleData.Vanaheim.mon.map((scene) => (
                <section key={scene.start} value={scene.end}>
                    <h3>{scene.act}</h3>
                    <p>{scene.start}</p>
                    <p>{scene.end}</p>
                
                </section>
            ))}
            </div>
        </>
        
    );
}





  