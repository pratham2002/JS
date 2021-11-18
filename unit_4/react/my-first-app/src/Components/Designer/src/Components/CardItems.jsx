import { Description } from "./Description";
import { Pricing } from "./Pricing";
import { Title } from "./Title";

export default function CardItems() {
  return (
    <div className="cardItems">
      <img src="https://via.placeholder.com/350x200" alt="placeholder" />
      <Title value="Pepperoni Pizza" />
      <Description desc="Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust." />
      <br />
      <br />
      <br />
      <Pricing oValue="$29.90" dValue="$23.90" />
    </div>
  );
}
