import styles from "@/styles/Home.module.css";
import Link from 'next/link';
import ArtistModal from "../pages/artist_modal";

export function KnapArtist(){
    return(
      <Link href="/artist_modal">
      <button className={styles.KnapArtist}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg> </button>
    </Link>
    );
  }

export default function ArtistCard({ bandData }) {
    return (
      <>
<div>
{bandData.map((perBand) => (
          <section key={perBand.act} value={perBand.act}>
            <div className={styles.artist_forside}>
                    <h2>{perBand.name}</h2>
           </div>
          </section>
        ))}
</div>
      </>
      
    
    );
  }


   




 

