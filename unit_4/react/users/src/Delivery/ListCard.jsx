function ListCard({name,img,cate,receipe}){
    return(
        <div style={{display:"flex",minWidth:"350px",gap:5,margin:"auto",width:"35%"}}>
            <img src={img} style={{height:"150px"}} alt={name} />
            <div style={{display:"flex",paddingLeft:5,flexDirection:"column"}}>
                <h3>{name}</h3>
                <h4>Category:{cate}</h4>
                <a href={receipe} target="_blank">Click Here To get Full Recepie</a>
            </div>

        </div>
    )
}

export default ListCard;