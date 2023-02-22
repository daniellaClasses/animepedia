import { AnimeCard } from "./AnimeCard.jsx";
import styles  from "./AnimeGrid.module.css";
import { Pagination } from "./Pagination.jsx";


export function AnimeGrid({animes,page,hasNextPage,maxPages,setPage}) {
    // const[apiResponse, setApiResponse] = useState([]);
    
    return (
            <ul className={styles.animeGridList}>
                { Array.from(animes).map((anime) => (
                    <AnimeCard key={"A-"+anime.mal_id} anime={anime} />
                    ))}
            </ul>
    );
}