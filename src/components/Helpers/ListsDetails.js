import classes from './ListsDetails.module.css'

const ListsDetails = (props) => {
    return (
        <div className={classes.spacing}>
            <span className={classes.addBold}>{props.title}: </span>
            {props.items.map((el, index) => {
                const [filterName] = props.itemsAux.filter(elem => elem.url === el)
                if (props.links) {
                    return <a key={index} href={filterName.url} className={classes.addMargin} onClick={props.onClickItem}>{(props.movies) ? filterName.title : filterName.name}</a>
                }
                else { return <span key={index} className={classes.addSpanStyle}>{(props.movies) ? filterName.title : filterName.name}</span> }

            })}
        </div>
    )
}

export default ListsDetails;