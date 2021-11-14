import styles from "./Button.Module.css";

export default function Home(){
    return(
        <button className={`${styles.button} ${styles.pink}`}>HOME</button>
    )
}