import classes from './MovieDetails.module.css'
import SpanDetails from '../Helpers/SpanDetails';
import ListsDetails from '../Helpers/ListsDetails';
import ItemDetails from '../Modals/ItemDetails';
import PlanetsModal from '../Modals/PlanetsModal';
import StarShipsModal from '../Modals/StarShipsModal';
import VehiclesModal from '../Modals/VehiclesModal';
import SpeciesModal from '../Modals/SpeciesModal';
import { useState } from 'react';
import Button from '../Helpers/Button';
import FooterButton from '../Helpers/FooterButton';
const MovieDetails = (props) => {


    //useState for modal based on clicked element
    const [showItemDetails, setShowItemDetails] = useState(false);
    const [linkItem, setLinkItem] = useState('');

    //function that will preventDefault onClick on url
    //sets link and showModal 
    const showItemDetailsHandler = (ev) => {
        ev.preventDefault();
        setLinkItem(ev.target.href);
        setShowItemDetails(true);
    }

    //close modal function
    const closeItemModalHandler = () => {
        setShowItemDetails(false);
    }

    //return page element
    //used Helper components like SpanDetails and ListDetails for the MovieDetails
    //conditional Content based on the link selected
    return (
        <>
            <div className={classes.backdrop} onClick={props.onShowModal}></div >
            <div className={classes.modal}>
                <SpanDetails title="Title" desc={props.entireData.movieData.title} />
                <SpanDetails title="Episode" desc={props.entireData.movieData.episode_id} />
                <div className={classes.addBorder}></div>
                <SpanDetails title="Description" desc={props.entireData.movieData.opening_crawl} />
                <SpanDetails title="Director" desc={props.entireData.movieData.director} />
                <SpanDetails title="Producer" desc={props.entireData.movieData.producer} />
                <SpanDetails title="Release Date" desc={props.entireData.movieData.release_date} />
                <ListsDetails title="Characters" items={props.entireData.movieData.characters} itemsAux={props.entireData.people} links={true} onClickItem={showItemDetailsHandler} />
                <ListsDetails title="Planets" items={props.entireData.movieData.planets} itemsAux={props.entireData.planets} links={true} onClickItem={showItemDetailsHandler} />
                <ListsDetails title="Starships" items={props.entireData.movieData.starships} itemsAux={props.entireData.starships} links={true} onClickItem={showItemDetailsHandler} />
                <ListsDetails title="Vehicles" items={props.entireData.movieData.vehicles} itemsAux={props.entireData.vehicles} links={true} onClickItem={showItemDetailsHandler} />
                <ListsDetails title="Species" items={props.entireData.movieData.species} itemsAux={props.entireData.species} links={true} onClickItem={showItemDetailsHandler} />
                <FooterButton><Button onClick={props.onShowModal}>Close</Button></FooterButton>
            </div >
            {(showItemDetails && linkItem.includes('people')) && <ItemDetails onCloseModal={closeItemModalHandler} filterItem={linkItem} data={props.entireData}></ItemDetails>}
            {(showItemDetails && linkItem.includes('planets')) && <PlanetsModal onCloseModal={closeItemModalHandler} filterItem={linkItem} data={props.entireData}></PlanetsModal>}
            {(showItemDetails && linkItem.includes('starships')) && <StarShipsModal onCloseModal={closeItemModalHandler} filterItem={linkItem} data={props.entireData}></StarShipsModal>}
            {(showItemDetails && linkItem.includes('vehicles')) && <VehiclesModal onCloseModal={closeItemModalHandler} filterItem={linkItem} data={props.entireData}></VehiclesModal>}
            {(showItemDetails && linkItem.includes('species')) && <SpeciesModal onCloseModal={closeItemModalHandler} filterItem={linkItem} data={props.entireData}></SpeciesModal>}
        </>
    );
};

export default MovieDetails;