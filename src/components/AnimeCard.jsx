// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./AnimeCard.module.css";

export function AnimeCard({anime}) {
    // se establece el titulo a mostrar
    let ttitle = "";
    if (anime.title_synonyms.length > 0) {
                        
        ttitle = anime.title_synonyms[0];
    }else {
        ttitle = anime.title;
    }
    return (
        <li className={styles.animeCard}  title={ttitle}>
            <Link to={"/anime/"+anime.mal_id}>
                <div className={styles.animeCardImage} style={{backgroundImage: `url(${anime.images.jpg.large_image_url})`}}></div>
                <p className={styles.animeTitle} title={ttitle}>{ttitle}</p>
            </Link>
        </li>
    );
}