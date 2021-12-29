function ListItem({name,img,price,desc}){
    return(
        <div style={{display:"flex",border:"1px solid black",padding:15,minWidth:"500px",gap:15,margin:"auto",width:"50%",marginBottom:15}}>
            <img src={img} style={{height:"150px"}} alt={name} />
            <div style={{display:"flex",paddingLeft:5,flexDirection:"column"}}>
                <h3>{name}</h3>
                <h4>Price:{price}</h4>
                <a>{desc}</a>
            </div>

        </div>
    )
}

export default ListItem;