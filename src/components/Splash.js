function Splash({ gateCount, setGateCount }) {
  return (
    <div className="enterContainer">
      {gateCount === 0 ? (
        <div className="pickyContainer">
          <button
            className="pickyButton"
            onClick={() => {
              setGateCount(1 + gateCount);
            }}
          >
            Get Picky!
          </button>
        </div>
      ) : (
        <div className="splashContainer">
          {gateCount === 1 ? (
            <>
              {/* <div Click>Click Anywhere to Continue</div> */}
              <img
                onClick={() => {
                  setGateCount(1 + gateCount);
                }}
                className="splash"
                src={"../pickySplash_0003_splash1.png"}
                alt="diagram1"
              />
            </>
          ) : gateCount === 2 ? (
            <>
              <img
                onClick={() => {
                  setGateCount(1 + gateCount);
                }}
                className="splash"
                src={"../pickySplash_0002_splash2.png"}
                alt="diagram1"
              />
              <div></div>
            </>
          ) : (
            <>
              <img
                onClick={() => {
                  setGateCount(1 + gateCount);
                }}
                className="splash"
                src={"../pickySplash_0001_splash3.png"}
                alt="diagram1"
              />
              <div></div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Splash;
