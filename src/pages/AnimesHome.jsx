import { useEffect, useState } from 'react';
import {AnimeGrid} from '../components/AnimeGrid';
import { GenresNav } from '../components/GenresNav';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { getRequestList} from "../utils/apiRequest.js";
import styles  from "./AnimesHome.module.css";
import genresList from "../components/genres_anime.json"


export function AnimesHome(params) {

    const[animes, setAnimes] = useState([]);
    const[page , setPage] = useState(1);
    const[hasNextPage , setHasNextPage] = useState(true);
    const[maxPages , setMaxPages] = useState("");
    const[searchParam, setSearchParam] = useState("");
    const[genre, setGenre]= useState("");
    const[searching, setSearching]= useState(false);
    const[genreState, setGenreState]= useState(false);
    const[nF404,setNF404]=useState(true);

    useEffect(() => {
        setNF404(false);
        if (searching || genreState) {
            if (searching) {
                setGenre("");
            }
            else{
                setSearchParam("");
            }
            setPage(1)
            getRequestList("anime",searchParam,page,genre).then(json => {
                setAnimes(json.data)
                if (json.pagination.items.count < 1) {
                    setNF404(true);
                }
                setHasNextPage(json.pagination.has_next_page)
                setMaxPages(json.pagination.last_visible_page)
            });
            setSearching(false);
            setGenreState(false);
        }
        else {
            getRequestList("anime",searchParam,page,genre).then(json => {
                setAnimes(json.data)
                setHasNextPage(json.pagination.has_next_page)
                setMaxPages(json.pagination.last_visible_page)
                setPage(page)
            });
        }
    }, [page,searchParam,genre]);
    if (nF404) {
        return (
            <div>
                <Header searchParam={searchParam} setSearchParam={setSearchParam} setSearching={setSearching}/>
                <main >
                    <h1 className={styles.detailsError}>El anime que busca no está disponible en este momento</h1>
                </main>
            </div>
        );
    }
    return (
        <div>
            <Header searchParam={searchParam} setSearchParam={setSearchParam} setSearching={setSearching}/>
            <main className={styles.animesMain}>
                <AnimeGrid className={styles.animeGrid} page={page} hasNextPage={hasNextPage} maxPages={maxPages} setPage={setPage} animes={animes}/>
                <GenresNav className={styles.genresNav} genres={genresList} setGenre={setGenre} setGenreState={setGenreState}/>
            </main>
            <section className={styles.paginationSection}>
                <Pagination page={page} hasNextPage={hasNextPage} maxPages={maxPages} setPage={setPage}/>
            </section>
        </div>
    );
}