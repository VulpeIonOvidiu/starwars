import classes from './MovieList.module.css';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import SearchOption from './SearchOption';

//Component that will get the api data
//includes MovieCard and SearchOption that will be displayer
const MovieList = () => {

    //initialize the states
    const [dataLoaded, setIsDataLoaded] = useState(false);
    const [mapListMovies, setMapListMovies] = useState([]);
    const [filterSearch, setFilterSearch] = useState('');
    const [species, setSpecies] = useState([]);
    const [starships, setStartships] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [people, setPeople] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    //use effect without dependencies because will need to be called only once
    useEffect(() => {

        async function getMovies() {
            await fetch('https://swapi.dev/api/films/?format=json')
                .then(response => response.json())
                .then(data => {
                    setMapListMovies(data.results);
                    setIsDataLoaded(true);
                }).catch();
        }

        const apiUrls = ["https://swapi.dev/api/people/?page=1&format=json", "https://swapi.dev/api/species/?page=1&format=json", 'https://swapi.dev/api/starships/?page=1&format=json', "https://swapi.dev/api/planets/?page=1&format=json", 'https://swapi.dev/api/vehicles/?page=1&format=json'];
        const stateFunctions = [setPeople, setSpecies, setStartships, setPlanets, setVehicles]
        //use getData function to iterate thru the calls and also use the setters for the data that we get back
        //created recursive function because for People Species etc you only get 10 objects per call
        async function getData(url, setState) {
            await fetch(url)
                .then(response => response.json())
                .then(data => {
                    setState(prev => ([...prev, ...data.results]));
                    if (data.next !== null) {
                        getData(data.next, setState);
                    }
                })
                .catch(error => { console.log(error) });
        }

        for (let i = 0; i < apiUrls.length; i++) {
            getData(apiUrls[i], stateFunctions[i])
        }

        getMovies();

    }, []);

    //Set data for the filter search that will render the page based on the search

    const onSearchElement = (data) => {
        setFilterSearch(data);
    };

    //filter list of movies based on title or description
    const mapListMoviesFilter = mapListMovies.filter(el => {
        return el.title.toLowerCase().includes(filterSearch) || el.opening_crawl.toLowerCase().includes(filterSearch)
    });


    //return elements
    //condition added on dataLoaded to display different content based on the the filter or the data is not loaded
    return (
        <>
            <SearchOption searchElement={onSearchElement} />
            <ul className={classes.movie_list}>
                {!dataLoaded && <h2 className={classes.movie_list__fallback}>Please wait...</h2>}
                {dataLoaded && mapListMoviesFilter.map(el => <MovieCard movieData={el} people={people} planets={planets} startships={starships} vehicles={vehicles} species={species} movies={mapListMovies} key={el.episode_id}></MovieCard>)}
                {(dataLoaded && mapListMoviesFilter.length === 0) && <li className={classes.movie_list__fallback}>No Movies to display</li>}
            </ul>

        </>
    )
};

export default MovieList;