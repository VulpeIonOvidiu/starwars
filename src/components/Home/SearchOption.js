import classes from './SearchOption.module.css'

const SearchOption = (props) => {

    const searchElementHandler = (event) => {
        if (event.target.value.length > 2) {
            props.searchElement(event.target.value)
        } else {
            props.searchElement("")
        }
    }

    return (
        <nav className={`${classes.navbar} ${classes.bg_light}`}>
            <div className={classes.navbar_brand}>Test Ovidiu Vulpe</div>
            <input className={classes.form_control} type='text' placeholder="Search Movies" onChange={searchElementHandler}></input>
        </nav>
    )
};

export default SearchOption;