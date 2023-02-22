// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./MangaCard.module.css";

export function MangaCard({manga}) {
    // se establece el titulo a mostrar
    let ttitle = "";
    if (manga.title_synonyms.length > 0) {
                        
        ttitle = manga.title_synonyms[0];
    }else {
        ttitle = manga.title;
    }
    return (
        <li className={styles.mangaCard}  title={ttitle}>
            <Link to={"/manga/"+manga.mal_id}>
                <div className={styles.mangaCardImage} style={{backgroundImage: `url(${manga.images.jpg.large_image_url})`}}></div>
                <p className={styles.mangaTitle} title={ttitle}>{ttitle}</p>
            </Link>
        </li>
    );
}