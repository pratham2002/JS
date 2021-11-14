import styles from './Button.Module.css'
const getStyleForType =(type)=> {
    switch(type){
        case 'red':
            return {
                background: `rgb(175,42,50)`
            };
        case 'blue':
            return {
                background: `rgb(35,160,217)`
            };
        case 'green':
            return {
                background: "rgb(143,190,66)"
            };
        case 'brown':
            return {
                background: `rgb(146,107,47)`
            };
        case 'orange':
            return {
                background: `orange`
            };
        case 'dblue':
            return {
                background: `rgb(122,177,190)`
            };
        case 'purple':
            return {
                background: `purple`
            };
        case 'pink':
            return {
                background: `#d7427e`
            };
        default:
            return;
        
         
    }

}

function Buttons({title,type}){
    const style = getStyleForType(type);
    return(
        <button className={styles.button} style={style}>{title}</button>
    )
}
export default Buttons;