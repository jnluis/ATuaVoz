import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import PropTypes from "prop-types";
import particlesConfig from "./background.config";

export default function Background({ children }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Initialize particles engine
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative w-full bg-light-bg">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
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
