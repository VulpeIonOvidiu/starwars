import classes from './CommonModal.module.css'
import SpanDetails from '../Helpers/SpanDetails';
import ListsDetails from '../Helpers/ListsDetails';
import Button from '../Helpers/Button';
import FooterButton from '../Helpers/FooterButton';

//Vehicle modal - shows detail page of the vehicle selected
const VehiclesModal = (props) => {

    const [vehiclesItem] = props.data.vehicles.filter(el => { return el.url === props.filterItem });

    return (
        <>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
            <div className={classes.modal}>
                <SpanDetails title="Name" desc={vehiclesItem.name} />
                <SpanDetails title="Model" desc={vehiclesItem.model} />
                <SpanDetails title="Manufacturer" desc={vehiclesItem.manufacturer} />
                <SpanDetails title="Cost in credits" desc={vehiclesItem.cost_in_credits} />
                <SpanDetails title="Length" desc={vehiclesItem.length} />
                <SpanDetails title="Max Atmosphering speed" desc={vehiclesItem.max_atmosphering_speed} />
                <SpanDetails title="Crew" desc={vehiclesItem.crew} />
                <SpanDetails title="Passengers" desc={vehiclesItem.passengers} />
                <SpanDetails title="Cargo Capacity" desc={vehiclesItem.cargo_capacity} />
                <SpanDetails title="Consumables" desc={vehiclesItem.consumables} />
                <SpanDetails title="Vehicle class" desc={vehiclesItem.vehicle_class} />

                <ListsDetails title="Movies" items={vehiclesItem.films} itemsAux={props.data.movies} links={false} movies={true} />
                {vehiclesItem.pilots.length > 0 && <ListsDetails title="Pilots" items={vehiclesItem.pilots} itemsAux={props.data.people} links={false} movies={false} />}

                <FooterButton><Button onClick={props.onCloseModal}>Close</Button></FooterButton>
            </div>

        </>
    )
}

export default VehiclesModal;