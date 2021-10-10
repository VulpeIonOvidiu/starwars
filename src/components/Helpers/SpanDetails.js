import classes from './SpanDetails.module.css'

const SpanDetails = (props) => {
    return (
        <div className={classes.spacing}>
            <span className={classes.addBold}>{props.title}: </span>
            <span>{props.desc}</span>
        </div>
    )
}

export default SpanDetails;