import { MangaCard } from "./MangaCard.jsx";
import styles  from "./MangaGrid.module.css";
import { Pagination } from "./Pagination.jsx";


export function MangaGrid({mangas,page,hasNextPage,maxPages,setPage}) {
    // const[apiResponse, setApiResponse] = useState([]);
    
    return (
            <ul className={styles.mangaGridList}>
                { Array.from(mangas).map((manga) => (
                    <MangaCard key={"A-"+manga.mal_id} manga={manga} />
                    ))}
            </ul>
    );
}