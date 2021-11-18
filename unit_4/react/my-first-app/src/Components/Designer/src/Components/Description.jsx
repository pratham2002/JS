import { Information } from "./info";

function Description({ desc }) {
  return (
    <>
      <p>{desc}</p>
      <Information cal="265" pfc="12/10/31" temp="53.8" />
    </>
  );
}

export { Description };
