const api = "https://api.jikan.moe/v4/";

export function getRequestList(path,search,page,genre) {
    let finalPath = api + path + "?page=" + page;
    if (search) {
        finalPath += "&" + "q=" + search;
    }
    if (genre) {
        finalPath += "&" + "genres=" + genre;
    }
    return fetch(finalPath)
            .then(response => response.json())
}

export function getRequesById(path,id) {
    let finalPath = api + path + "/" + id;
    return fetch(finalPath)
            .then(response => response.json())
}