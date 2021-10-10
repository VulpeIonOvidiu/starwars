import classes from "./FooterButton.module.css"

const FooterButton = (props) => {
    return (
        <footer className={classes.footer}>{props.children}</footer>
    )
}

export default FooterButton;