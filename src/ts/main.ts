import axios from 'axios'
import './../style.scss'
import { IMovie, IOmdbResponse } from './models/IMovie';

const getMovies = async () => {
    const response = await axios.get<IOmdbResponse>("https://www.omdbapi.com/?apikey=b15f392c&s=harry");
    const movies = response.data.Search;
    return movies;

}
let movies = await getMovies();
let clickedMovies:IMovie[] = [];
const con1 = (document.getElementById("container1") as HTMLElement);
const con2 = (document.getElementById("container2") as HTMLElement);

function createHtml(container:HTMLElement, list:IMovie[]){
container.innerHTML = "";
list.forEach((listItem, i)=>{
const movieContainer = document.createElement("div");
if (listItem.isChosen){
    const imgcontainer = document.createElement("div");
    const img = document.createElement("img");
    img.src = listItem.Poster;

    const movieId = document.createElement("h3");
    movieId.innerHTML = listItem.imdbID;

    imgcontainer.appendChild(img);
    movieContainer.appendChild(imgcontainer);
    movieContainer.appendChild(movieId);
}
else {
    const title = document.createElement("h2");
    const year = document.createElement("p");
    title.innerHTML = listItem.Title;
    year.innerHTML = listItem.Year;
    title.addEventListener("click", () => {
        listItem.isChosen = true;
        clickedMovies.push(listItem);
        list.splice(i, 1);
        createHtml(con1, list);
        createHtml(con2, clickedMovies);
        console.log(list, clickedMovies);
    })

    movieContainer.appendChild(title);
    movieContainer.appendChild(year);
}
container.appendChild(movieContainer);
})
}

createHtml(con1, movies);
// createHtml(con2, clickedMovies);