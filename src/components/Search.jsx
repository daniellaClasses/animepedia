export function Search({searchParam,setSearchParam,searchState,setSearchState,setSearching}) {


    const changeSearchParam = (e) => {
        if (e.key === "Enter") {
            setSearchParam(e.target.value);
            setSearchState(false);
            setSearching(true);
        }
    };
    if (!searchState) {
        return(null);
    }
    return(
        <div>
            <input type="search" name="" id="" onKeyDown={changeSearchParam}/>
        </div>
    );
    
}