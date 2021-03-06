import classes from './CommonModal.module.css'
import SpanDetails from '../Helpers/SpanDetails';
import ListsDetails from '../Helpers/ListsDetails';
import Button from '../Helpers/Button';
import FooterButton from '../Helpers/FooterButton';

//People modal - shows detail page of the person selected
const PeopleModal = (props) => {


    //Tried a different approach to generate the page elements, iterationg thru the keys of the object
    const [peopleItem] = props.data.people.filter(el => { return el.url === props.filterItem });
    delete peopleItem.created;
    delete peopleItem.edited;
    let contextDisplay = [];
    for (const key in peopleItem) {
        if (key !== "url") {
            if (peopleItem.hasOwnProperty(key)) {

                if (typeof peopleItem[key] === "string") {
                    contextDisplay.push(< SpanDetails key={key} title={key.split("_").map(el => { return el[0].toUpperCase() + el.substring(1) }).join(" ")} desc={peopleItem[key]} />)
                } else {
                    if (peopleItem[key].length > 0) {
                        if (key !== "films") {
                            contextDisplay.push(<ListsDetails key={key} title={key.split("_").map(el => { return el[0].toUpperCase() + el.substring(1) }).join(" ")} items={peopleItem[key]} itemsAux={props.data[key]} links={false} movies={false} />);
                        }
                    }
                }
            }
        }
    }

    return (
        <>
            <div className={classes.backdrop} onClick={props.onCloseModal}></div>
            <div className={classes.modal}>
                {contextDisplay}
                <ListsDetails title="Movies" items={peopleItem.films} itemsAux={props.data.movies} links={false} movies={true} />
                <FooterButton><Button onClick={props.onCloseModal}>Close</Button></FooterButton>
            </div>

        </>
    )
}

export default PeopleModal;