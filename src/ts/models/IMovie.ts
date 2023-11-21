export interface IOmdbResponse {
    Search:IMovie[];
}

interface IMovie {
    Title:string;
    Year:string;
    Poster:string;
    imdbID:string;
    isChosen: boolean;
}