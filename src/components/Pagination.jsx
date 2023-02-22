import { useEffect, useState } from "react";
import styles  from "./Pagination.module.css";

export function Pagination({page,hasNextPage,maxPages,setPage}) {

    const nextPage = () => {  setPage(parseInt(page)+1); }
    const prevPage = () => { if(parseInt(page) > 0) setPage(parseInt(page)-1); };
    const setNumPage = (numPage) => {setPage(numPage); };

    const[buttons, setButtons] = useState([]);
    const generateButtons = () => {
        let btns = [];
        let index = 1;
        if (maxPages < 5) {
            index = 1;
        }
        else if (maxPages - page >= 5) {
            index = page;
        }
        else
        {
            index = maxPages - 5;
        }
        for (index; index <= page + 5; index++) {
            btns.push(index);
        }
        return(btns)
    };
    // crear estado para botones
    useEffect(() => {
        setButtons(generateButtons());
        
    }, [page,]);
    if (buttons.length == 0 || maxPages == 1) {
        return(null);
    }
    return(
        <div className={styles.paginationBox}>

            {page > 1 
                ? <button className={styles.paginationBtn} onClick={prevPage}>{"<<"}</button>
                : <button className={styles.paginationBtn} onClick={prevPage} disabled>{"<<"}</button>
            }
            
            <button className={styles.paginationBtn} onClick={e => {setPage(e.target.value); }} key={buttons[0]} value={buttons[0]} style={{ display: maxPages < buttons[0]? 'none': '', color: page == buttons[0]?'green': ''}}>{buttons[0]}</button>
            <button className={styles.paginationBtn} onClick={e => {setPage(e.target.value); }} key={buttons[1]} value={buttons[1]} style={{ display: maxPages < buttons[1]? 'none': '', color: page == buttons[1]?'green': ''}}>{buttons[1]}</button>
            <button className={styles.paginationBtn} onClick={e => {setPage(e.target.value); }} key={buttons[2]} value={buttons[2]} style={{ display: maxPages < buttons[2]? 'none': '', color: page == buttons[2]?'green': ''}}>{buttons[2]}</button>
            <button className={styles.paginationBtn} onClick={e => {setPage(e.target.value); }} key={buttons[3]} value={buttons[3]} style={{ display: maxPages < buttons[3]? 'none': '', color: page == buttons[3]?'green': ''}}>{buttons[3]}</button>
            <button className={styles.paginationBtn} onClick={e => {setPage(e.target.value); }} key={buttons[4]} value={buttons[4]} style={{ display: maxPages < buttons[4]? 'none': '', color: page == buttons[4]?'green': ''}}>{buttons[4]}</button>
            <button className={styles.paginationBtn} onClick={e => {setPage(e.target.value); }} key={buttons[5]} value={buttons[5]} style={{ display: maxPages < buttons[5]? 'none': '', color: page == buttons[5]?'green': ''}}>{buttons[5]}</button>
            
            {hasNextPage 
                ? <button className={styles.paginationBtn} onClick={nextPage}> {">>"}</button>
                : <button className={styles.paginationBtn} onClick={nextPage} disabled>{">>"}</button>
            }
            
            
        </div>
    );
}