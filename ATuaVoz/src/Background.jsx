import { useCallback, useEffect, useState, useMemo } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import PropTypes from "prop-types";
import particlesConfig from "./background.config";
import { nyanParticles } from "./background.config";

export default function Background({ children }) {
  const [init, setInit] = useState(false);
  const [nyan, setNyan] = useState(false);
  const [clickTimes,setClickTimes] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Initialize particles engine
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => {
    if (nyan) {
      return nyanParticles;
    } else {
      return particlesConfig;
    }
  }, [nyan]);

  const clickTimeCheck = () => {
    if (clickTimes < 9) {
      setClickTimes(clickTimes + 1);
    } else if (clickTimes === 9) {
      setNyan(true);
      setClickTimes(11);
    }
  }

  return (
    <div className="relative w-full" onClick={() => clickTimeCheck()}>
      {init && (
        <Particles
          id="tsparticles"
          options={options}
          className="absolute -z-10"
        />
      )}
      <div className="relative z-10">{children}</div>{" "}
      {/* Content overlays particles */}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop as a node
};
