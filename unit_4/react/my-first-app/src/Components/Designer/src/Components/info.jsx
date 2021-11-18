function Information({ cal, pfc, temp }) {
  return (
    <>
      <p className="left info">{cal} Cal </p>
      <p className="centre info">P/F/C:{pfc} </p>
      <p className="right info">{temp}°C </p>
    </>
  );
}

export { Information };
