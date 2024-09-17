// import {fetchData} from "./modules/fetchData";

async function fetchData(searchParams) {
    const API_KEY = '21eac196';
    let request = `http://www.omdbapi.com/?apikey=${API_KEY}`;
    
    for(let key in searchParams) {
      request += `&${key}=${searchParams[key]}`;
    }
    
    const res = await fetch(request);
    return await res.json();
  }

  async function loadMovieDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');
    
    if (!movieId) {
      alert("Movie ID not found in the URL!");
      return;
    }
  
    const movieData = await fetchData({ i: movieId });
    document.getElementById('title').textContent = movieData.Title;
    document.getElementById('plot').textContent = movieData.Plot;
    document.getElementById('poster').src = movieData.Poster;
  }
  
  window.onload = loadMovieDetails;
  