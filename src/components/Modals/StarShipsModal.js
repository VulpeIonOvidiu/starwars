import classes from './CommonModal.module.css'
import SpanDetails from '../Helpers/SpanDetails';
import ListsDetails from '../Helpers/ListsDetails';
import Button from '../Helpers/Button';
import FooterButton from '../Helpers/FooterButton';

//Starship modal - shows detail page of the startship selected
const StarShipsModal = (props) => {

    const [starShipItem] = props.data.starships.filter(el => { return el.url === props.filterItem });

    return (
        <>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
            <div className={classes.modal}>
                <SpanDetails title="Name" desc={starShipItem.name} />
                <SpanDetails title="Model" desc={starShipItem.model} />
                <SpanDetails title="Manufacturer" desc={starShipItem.manufacturer} />
                <SpanDetails title="Cost in credits" desc={starShipItem.cost_in_credits} />
                <SpanDetails title="Length" desc={starShipItem.length} />
                <SpanDetails title="Max Atmosphering_speed" desc={starShipItem.max_atmosphering_speed} />
                <SpanDetails title="Crew" desc={starShipItem.crew} />
                <SpanDetails title="Passengers" desc={starShipItem.passengers} />
                <SpanDetails title="Cargo Capacity" desc={starShipItem.cargo_capacity} />
                <SpanDetails title="Consumables" desc={starShipItem.consumables} />
                <SpanDetails title="Hyperdrive_rating" desc={starShipItem.hyperdrive_rating} />
                <SpanDetails title="MGLT" desc={starShipItem.MGLT} />
                <SpanDetails title="StartShip Class" desc={starShipItem.starship_class} />

                <ListsDetails title="Movies" items={starShipItem.films} itemsAux={props.data.movies} links={false} movies={true} />
                {starShipItem.pilots.length > 0 && <ListsDetails title="Pilots" items={starShipItem.pilots} itemsAux={props.data.people} links={false} movies={false} />}

                <FooterButton><Button onClick={props.onCloseModal}>Close</Button></FooterButton>
            </div>

        </>
    )
}

export default StarShipsModal;