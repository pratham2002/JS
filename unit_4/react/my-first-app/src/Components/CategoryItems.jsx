function CategoryItems({
    label,
    url
}){
    return(
        <div>
            <img src={url} alt={label} />
            <div>
                {label}
            </div>
        </div>
    )

}
export default CategoryItems