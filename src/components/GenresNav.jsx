import styles from "./GenresNav.module.css";

export function GenresNav({genres,setGenre,setGenreState}) {
    return(
        <div className={styles.genresNavContainer}>
            <ul>
                {genres.map((item) => 
                    <li 
                        key={"G-"+item.mal_id} 
                        data-genre={item.mal_id} 
                        onClick={(e) => {setGenre(e.target.dataset.genre); setGenreState(true);}}
                    >
                        {item.name}
                    </li>)}
            </ul>
        </div>
    )
}

            