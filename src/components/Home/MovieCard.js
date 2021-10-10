import classes from './MovieCard.module.css'
import MovieDetails from './MovieDetails';
import { useState } from 'react';

const MovieCard = (props) => {

    //set useState for modal if it will be displayer
    const [showModal, setShowModal] = useState(false);

    // construct object with entire data that will be passed along in order to display the desired info
    const entireData = {
        movieData: props.movieData,
        people: props.people,
        planets: props.planets,
        starships: props.startships,
        vehicles: props.vehicles,
        species: props.species,
        movies: props.movies
    }

    //toggle modal show/not show
    const showModalHandler = () => {
        setShowModal(prev => (!prev));
    };


    //return MovieCard structure
    return (
        <li>
            <div className={classes.card} onClick={showModalHandler}>
                <h5 className={classes.card_title}>{props.movieData.title}</h5>
                <div className={classes.card_text}>{props.movieData.opening_crawl}</div>

            </div>
            {showModal && <MovieDetails entireData={entireData} onShowModal={showModalHandler}></MovieDetails>}
        </li>
    );

}
export default MovieCard;
