import classes from './SearchOption.module.css'

const SearchOption = (props) => {

    const searchElementHandler = (event) => {
        props.searchElement(event.target.value)
    }

    return (
        <nav className={`${classes.navbar} ${classes.bg_light}`}>
            <div className={classes.navbar_brand}>Test Ovidiu Vulpe</div>
            <input className={classes.form_control} type='text' placeholder="Search Movies" onChange={searchElementHandler}></input>
        </nav>
    )
};

export default SearchOption;