import { useEffect, useState } from "react";
import ListCard from "../components/ListCards";

function HomePage() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const onAdd = (text, page) => {
    console.log(page);

    return fetch(
      `https://api.github.com/search/repositories?q=${text}&page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res.items), setLoading(false);
      })
      .catch((err) => console.log("Error In Retreving", err));
  };
  // console.log(data);
  useEffect(() => {
    onAdd(state, page);
  }, [page]);
  return (
    <>
      <h2>HomePage</h2>
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Search For Repos"
      />
      <button
        onClick={() => {
          onAdd(state, page);
          // setState("");
        }}
      >
        Search
      </button>
      {isLoading && <h2>Loading...</h2>}
      <br />
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      {data?.map((e) => (
        <ListCard
          key={e.id}
          name={e.name}
          desc={e.description}
          img={e.owner.avatar_url}
          url={e.html_url}
        />
      ))}
    </>
  );
}

export default HomePage;
