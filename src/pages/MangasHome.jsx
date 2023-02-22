import { useEffect, useState } from 'react';
import {MangaGrid} from '../components/MangaGrid';
import { GenresNav } from '../components/GenresNav';
import { Header } from '../components/Header';
import { Pagination } from '../components/Pagination';
import { getRequestList} from "../utils/apiRequest.js";
import styles  from "./MangasHome.module.css";
import genresList from "../components/genres_anime.json"


export function MangasHome(params) {

    const[mangas, setMangas] = useState([]);
    const[page , setPage] = useState(1);
    const[hasNextPage , setHasNextPage] = useState(true);
    const[maxPages , setMaxPages] = useState("");
    const[searchParam, setSearchParam] = useState("");
    const[genre, setGenre]= useState("");
    const[searching, setSearching]= useState(false);
    const[genreState, setGenreState]= useState(false);
    const[nF404,setNF404]=useState(false);

    useEffect(() => {
        setNF404(false);
        if (searching || genreState) {
            if (searching) {
                setGenre("");
            }
            else
            {
                setSearchParam("");
                setNF404(false);
            }
            setPage(1)
            getRequestList("manga",searchParam,page,genre).then(json => {
                if (json.pagination.items.count < 1) {
                    setNF404(true);
                }
                setMangas(json.data)
                setHasNextPage(json.pagination.has_next_page)
                setMaxPages(json.pagination.last_visible_page)
            });
            setSearching(false);
            setGenreState(false);
        }
        else {
            getRequestList("manga",searchParam,page,genre).then(json => { 
                setMangas(json.data)
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
                    <h1 className={styles.detailsError}>El manga que busca no está disponible en este momento</h1>
                </main>
            </div>
        );
    }
    return (
        <div>
            <Header searchParam={searchParam} setSearchParam={setSearchParam} setSearching={setSearching}/>
            <main className={styles.mangasMain}>
                <MangaGrid className={styles.mangaGrid} page={page} hasNextPage={hasNextPage} maxPages={maxPages} setPage={setPage} mangas={mangas}/>
                <GenresNav className={styles.genresNav} genres={genresList} setGenre={setGenre} setGenreState={setGenreState}/>
            </main>
            <section className={styles.paginationSection}>

                <Pagination page={page} hasNextPage={hasNextPage} maxPages={maxPages} setPage={setPage}/>
            </section>
        </div>
    );
}