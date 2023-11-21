export interface IOmdbResponse {
    Search:IMovie[];
}

export interface IMovie {
    Title:string;
    Year:string;
    Poster:string;
    imdbID:string;
    isChosen: boolean;
}