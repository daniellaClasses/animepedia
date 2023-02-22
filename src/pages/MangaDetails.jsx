import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Header} from "../components/Header";
import { getRequesById } from "../utils/apiRequest";

import styles from "./MangaDetails.module.css";


export function MangaDetails(params) {


    let {mangaId} = useParams();
    const[mangaInfo,setMangaInfo]=useState([]);
    const[loading,setLoading]= useState(true);
    const[manga404,setManga404]= useState(false);
    const[mangaPictures, setMangaPictures]= useState([]);

    useEffect(() => {
        getRequesById("manga",mangaId)
            .then(read => {
                if (read.status === 404) {
                    setManga404(true);
                }
                setMangaInfo(read.data)
            })
        getRequesById("manga",mangaId+"/pictures")
            .then(read => {
                if (read.status === 404) {
                    setManga404(true);
                }
                setMangaPictures(read.data)
                setLoading(false)
            })
        
    },[mangaId]);
    // console.log(mangaInfo.data.title_synonyms[0]);
    if (manga404) {
        return(
            <div>
                <Header/>
                <main >
                    <h1 className={styles.detailsError}>El manga que busca no está disponible en este momento</h1>
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
                    <div className={styles.detailImage} style={{backgroundImage: `url(${mangaInfo.images.jpg.large_image_url})`}}></div>
                    
                    <div className={styles.genresContainer}>
                        <h4 className={styles.genresTitle}>STATUS </h4>
                        <spam className={styles.detailsGenre}>{mangaInfo.status}</spam>
                    </div>
                    <div className={styles.genresContainer}>
                        <h4 className={styles.genresTitle}>GENEROS </h4>
                        {mangaInfo.genres.map((item) => {return(<spam key={"EG-"+item.mal_id} className={styles.detailsGenre}>{item.name}</spam>)})}
                    </div>
                    <div className={styles.genresContainer}>
                        <h4 className={styles.genresTitle}>Tomos </h4>
                        <spam key={"EG-"+mangaInfo.mal_id} className={styles.detailsGenre}>{!mangaInfo.volumes ? 1:mangaInfo.volumes}</spam>
                        
                    </div>
                </aside>
                <section className={styles.detailsInfo}>
                    <h1 className={styles.detailsTitle}>{mangaInfo.title_synonyms[0] ? mangaInfo.title_synonyms[0] : mangaInfo.title}</h1>
                    <spam className={styles.mangaStatus}>{mangaInfo.status}</spam>
                    <p className={styles.detailsDescription}>{mangaInfo.synopsis}</p>
                    <div className={styles.picturesContainer}>
                        <h3 className={styles.picturesTitle}>Galería de imágenes</h3>
                        {mangaPictures.length > 0 ?
                            mangaPictures.map((item)=>{
                                return(

                                    <div className={styles.picture} style={{backgroundImage: `url(${item.jpg.large_image_url})`}}></div>
                                )

                            }) : <h4 className={styles.genresTitle}>No se encontraron pictures disponibles</h4>
                        }
                        
                    </div>
                    
                </section>

            </main>
        </div>
    );
}