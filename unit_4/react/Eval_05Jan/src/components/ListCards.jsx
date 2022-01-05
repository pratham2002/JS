function ListCard({ name, img, url, desc }) {
  return (
    <div
      style={{
        display: "flex",
        minWidth: "350px",
        gap: 5,
        margin: "auto",
        width: "35%"
      }}
    >
      <img src={img} style={{ height: "150px" }} alt={name} />
      <div style={{ display: "flex", paddingLeft: 5, flexDirection: "column" }}>
        <h3>{name}</h3>
        <p>{desc}</p>
        <a href={url} target="_blank">
          Click Here To Go to Their Page
        </a>
      </div>
    </div>
  );
}

export default ListCard;
