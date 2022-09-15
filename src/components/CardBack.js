function CardBack({ measurements }) {
  return (
    <div
      className={measurements?.length > 9 ? "cardBack moreThanTen" : "cardBack"}
    >
      {measurements
        ? measurements.map((itm, idx) => {
            return (
              <div
                key={idx}
                className={
                  measurements?.length > 11
                    ? "backIngredient manyBackIngredient"
                    : "backIngredient"
                }
              >
                {itm}
              </div>
            );
          })
        : null}
      <img
        className="stain"
        src="../../coffee-stain-png-33672.png"
        alt="stain"
      />
      <img className="stain2" src="../../pngaaa.com-27358.png" alt="stain2" />
      <img
        className="stain3"
        src="../../pngfind.com-stain-png-185577.png"
        alt="stain3"
      />
    </div>
  );
}

export default CardBack;
