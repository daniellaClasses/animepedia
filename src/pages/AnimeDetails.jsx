import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Header} from "../components/Header";
import { getRequesById } from "../utils/apiRequest";

import styles from "./AnimeDetails.module.css";


export function AnimeDetails(params) {


    let {animeId} = useParams();
    const[animeInfo,setAnimeInfo]=useState([]);
    const[loading,setLoading]= useState(true);
    const[anime404,setAnime404]= useState(false);
    const[animeVideos, setAnimeVideos]= useState([]);

    useEffect(() => {
        getRequesById("anime",animeId)
            .then(read => {
                if (read.status === 404) {
                    setAnime404(true);
                }
                setAnimeInfo(read.data)
            })
        getRequesById("anime",animeId+"/videos")
            .then(read => {
                if (read.status === 404) {
                    setAnime404(true);
                }
                setAnimeVideos(read.data)
                setLoading(false)
            })
        
    },[animeId]);
    // console.log(animeInfo.data.title_synonyms[0]);
    if (anime404) {
        return(
            <div>
                <Header/>
                <main >
                    <h1 className={styles.detailsError}>El anime que busca no está disponible en este momento</h1>
                </main>
            </div>
        );
    }
    if (loading) {
        return(
            <div>
                <Header/>
                <main className={styles.detailsMain}>
                    
                </main>
    
            </div>
        );
    }
    return(
        <div>
            <Header/>
            <main className={styles.detailsMain}>
                <aside className={styles.detailsAside}>
                    <div className={styles.detailImage} style={{backgroundImage: `url(${animeInfo.images.jpg.large_image_url})`}}></div>
                    
                    <div className={styles.genresContainer}>
                        <h4 className={styles.genresTitle}>STATUS </h4>
                        <spam className={styles.detailsGenre}>{animeInfo.status}</spam>
                    </div>
                    <div className={styles.genresContainer}>
                        <h4 className={styles.genresTitle}>GENEROS </h4>
                        {animeInfo.genres.map((item) => {return(<spam key={"EG-"+item.mal_id} className={styles.detailsGenre}>{item.name}</spam>)})}
                    </div>
                    <div className={styles.genresContainer}>
                        <h4 className={styles.genresTitle}>EPISODIOS </h4>
                        <spam key={"EG-"+animeInfo.mal_id} className={styles.detailsGenre}>{animeInfo.episodes}</spam>
                        
                    </div>
                </aside>
                <section className={styles.detailsInfo}>
                    <h1 className={styles.detailsTitle}>{animeInfo.title_synonyms[0] ? animeInfo.title_synonyms[0] : animeInfo.title}</h1>
                    <spam className={styles.animeStatus}>{animeInfo.status}</spam>
                    <p className={styles.detailsDescription}>{animeInfo.synopsis}</p>
                    <div className={styles.videosContainer}>
                        <h3 className={styles.videosTitle}>Videos relacionados</h3>
                        {animeVideos.promo.length > 0 ?
                            animeVideos.promo.map((item)=>{
                                console.log(item)
                                return(

                                    <iframe 
                                        className={styles.video} 
                                        width="512" height="256" src={item.trailer.embed_url} title="YouTube video player" 
                                        frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen;" 
                                        >

                                    </iframe>)

                            }) : <h4 className={styles.genresTitle}>No se encontraron videos disponibles</h4>
                        }
                        
                    </div>
                </section>

            </main>
        </div>
    );
}