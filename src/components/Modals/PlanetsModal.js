import classes from './ItemDetails.module.css'
import SpanDetails from '../Helpers/SpanDetails';
import ListsDetails from '../Helpers/ListsDetails';
import Button from '../Helpers/Button';
import FooterButton from '../Helpers/FooterButton';
const PlanetsModal = (props) => {

    const [planetItem] = props.data.planets.filter(el => { return el.url === props.filterItem });

    return (
        <>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
            <div className={classes.modal}>
                <SpanDetails title="Name" desc={planetItem.name} />
                <SpanDetails title="Rotation Period" desc={planetItem.rotation_period} />
                <SpanDetails title="Orbital Period" desc={planetItem.orbital_period} />
                <SpanDetails title="Diameter" desc={planetItem.diameter} />
                <SpanDetails title="Climate" desc={planetItem.climate} />
                <SpanDetails title="Gravity" desc={planetItem.gravity} />
                <SpanDetails title="Terrain" desc={planetItem.terrain} />
                <SpanDetails title="Surface water" desc={planetItem.surface_water} />
                <SpanDetails title="Population" desc={planetItem.population} />

                <ListsDetails title="Movies" items={planetItem.films} itemsAux={props.data.movies} links={false} movies={true} />
                {planetItem.residents.length > 0 && <ListsDetails title="Species" items={planetItem.residents} itemsAux={props.data.people} links={false} movies={false} />}

                <FooterButton><Button onClick={props.onCloseModal}>Close</Button></FooterButton>
            </div>

        </>
    )
}

export default PlanetsModal;