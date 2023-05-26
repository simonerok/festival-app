import React from 'react';
import { FestivalMap } from "./festivalMap";
import FestivalPage from "@/pages/map";
import { GetServerSideProps } from "next";



export function ScheduleCardMID({scheduleData}){
    console.log("mid_Scene");
    return (
        <>
          <h1>MID SCENE</h1>
            <div>
            {scheduleData.Midgard.mon.map((scene) => (
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



  