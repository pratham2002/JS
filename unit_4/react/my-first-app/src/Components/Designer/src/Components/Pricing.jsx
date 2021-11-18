function Pricing({ oValue, dValue }) {
  return (
    <div className="pricing">
      <p>
        {dValue}
        <span className="red"> {oValue}</span>
        <button className="order">ORDER</button>
      </p>
    </div>
  );
}

export { Pricing };
