import Buttons from "./Button";
function ButtonList(){
    return(
        <div className="Button-List">
            <Buttons type="blue" title={"JOIN US"}/>
            <Buttons type ="dblue" title={"SETTINGS"}/>
            <Buttons type="orange" title={"LOGIN"}/>
            <Buttons type="red" title={"CONTACT US"}/>
            <Buttons type="green" title={"SEARCH"}/>
            <Buttons type="purple" title={"HELP"}/>
            <Buttons type="pink" title={"HOME"}/>
            <Buttons type="brown" title={"DOWNLOAD"}/>
        </div>
    )
}

export default ButtonList;