import classes from './MovieList.module.css';
import { useState, useEffect, useMemo } from 'react';
import MovieCard from './MovieCard';
import SearchOption from './SearchOption';
import debounce from 'lodash.debounce';

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
    const [loadDataError, setLoadDataError] = useState(false);

    //use effect without dependencies because will need to be called only once
    const apiUrlss = ["https://swapi.dev/api/people/?page=1&format=json", "https://swapi.dev/api/species/?page=1&format=json", 'https://swapi.dev/api/starships/?page=1&format=json', "https://swapi.dev/api/planets/?page=1&format=json", 'https://swapi.dev/api/vehicles/?page=1&format=json', 'https://swapi.dev/api/films/?format=json', 'stop'];
    const stateFunctions = [setPeople, setSpecies, setStartships, setPlanets, setVehicles, setMapListMovies]

    async function doApiCall(param, setState, iter) {
        if (param !== 'stop') {
            try {
                const response = await fetch(param);
                const data = await response.json();

                setState(prev => ([...prev, ...data.results]));
                if (param.includes('films')) {
                    setIsDataLoaded(true)
                }

                if (data.next !== null) {
                    doApiCall(data.next, setState, iter);
                } else {
                    doApiCall(apiUrlss[iter], stateFunctions[iter], ++iter);
                }

            } catch (err) {
                setLoadDataError(true)
            }
        }
    }


    useEffect(() => {
        //make api call
        if (!dataLoaded)
            doApiCall(apiUrlss[0], stateFunctions[0], 0)
    }, []);


    //Set data for the filter search that will render the page based on the search
    //console.log(rootLinks)
    const onSearchElement = (data) => {
        setFilterSearch(data);
    };

    //debounce search option, great solution when working with api calls
    const debounceSearchElementHandler = useMemo(
        () => debounce(onSearchElement, 300)
        , []);

    //filter list of movies based on title or description
    const mapListMoviesFilter = mapListMovies.filter(el => {
        return el.title.toLowerCase().includes(filterSearch) || el.opening_crawl.toLowerCase().includes(filterSearch)
    });

    //return elements
    //condition added on dataLoaded to display different content based on the the filter or the data is not loaded
    return (
        <>
            <SearchOption searchElement={debounceSearchElementHandler} />
            <ul key='listMovies' className={classes.movie_list}>
                {loadDataError && <li key='onError'><h2 className={classes.movie_list__fallback}>Sorry, something went wrong. <br />Please revisite webpage at another time</h2></li>}
                {!dataLoaded && !loadDataError && <li key='onwait'><h2 className={classes.movie_list__fallback}>Please wait...</h2></li>}
                {dataLoaded && mapListMoviesFilter.map((el, index) => <MovieCard movieData={el} people={people} planets={planets} startships={starships} vehicles={vehicles} species={species} movies={mapListMovies} key={el.episode_id}></MovieCard>)}
                {(dataLoaded && mapListMoviesFilter.length === 0) && <li key='noMovies' className={classes.movie_list__fallback}>No Movies to display</li>}
            </ul>

        </>
    )
};

export default MovieList;