import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import { Search } from '../components/Search';

export function Header({searchParam,setSearchParam,setSearching}) {

    
    const[searchState, setSearchState] = useState("");


    const   changeSearchState = () => {!searchState ?  setSearchState(true): setSearchState(false)};
    const   clearSearch = () => { setSearchParam(""); setSearching(false);};


    return(
        <header className={styles.headerContainer}>
            <div className={styles.logoHeader}>

            </div>
            <nav className={styles.headerNav}>
                <ul className={styles.headerLinks}>
                    <li><Link onClick={setSearchParam != undefined? clearSearch:""} to="/anime">Anime</Link></li>
                    <li><Link onClick={setSearchParam != undefined? clearSearch:""} to="/manga">Manga</Link></li>
                    <li>Discover</li>
                    
                </ul>
                <div className={styles.headerActions}>
                    <Search searchParam={searchParam} setSearchParam={setSearchParam} searchState={searchState} setSearchState={setSearchState} setSearching={setSearching}/>
                    <div className={styles.actionButton} onClick={changeSearchState}><i className={"bi bi-search " + styles.iconSearch}></i></div>
                    <div className={styles.actionButton} ><i className={"bi bi-heart-fill " + styles.iconFav}></i></div>
                    <div className={styles.userIcon + " " + styles.actionButton} >
                        <i className={"bi bi-person-fill " + styles.iconUser}></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}