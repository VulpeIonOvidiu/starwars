import classes from './ItemDetails.module.css'
import SpanDetails from '../Helpers/SpanDetails';
import ListsDetails from '../Helpers/ListsDetails';
import Button from '../Helpers/Button';
import FooterButton from '../Helpers/FooterButton';
const SpeciesModal = (props) => {

    const [speciesItem] = props.data.species.filter(el => { return el.url === props.filterItem });

    return (
        <>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
            <div className={classes.modal}>
                <SpanDetails title="Name" desc={speciesItem.name} />
                <SpanDetails title="Classification" desc={speciesItem.classification} />
                <SpanDetails title="Designation" desc={speciesItem.sentient} />
                <SpanDetails title="Average Height" desc={speciesItem.average_height} />
                <SpanDetails title="Skin Colors" desc={speciesItem.skin_colors} />
                <SpanDetails title="Hair Colors" desc={speciesItem.hair_colors} />
                <SpanDetails title="Eye Colors" desc={speciesItem.eye_colors} />
                <SpanDetails title="Average Lifespan" desc={speciesItem.average_lifespan} />
                <SpanDetails title="Homeworld" desc={speciesItem.homeworld} />
                <SpanDetails title="Language" desc={speciesItem.language} />
                {speciesItem.people.length > 0 && <ListsDetails title="People" items={speciesItem.people} itemsAux={props.data.people} links={false} movies={false} />}

                <ListsDetails title="Movies" items={speciesItem.films} itemsAux={props.data.movies} links={false} movies={true} />


                <FooterButton><Button onClick={props.onCloseModal}>Close</Button></FooterButton>
            </div>

        </>
    )
}

export default SpeciesModal;