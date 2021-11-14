import styles from "./Button.Module.css";


function ContactUs(){
    return(
        <button className={`${styles.button} ${styles.red}`}>Contact Us</button>
    )
}

export default ContactUs;