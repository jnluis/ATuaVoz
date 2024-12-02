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
    <div className="relative">
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="absolute h-screen w-screen -z-10"
        />
      )}
      <div className="relative z-10">{children}</div> {/* Content overlays particles */}
    </div>
  );
}

Background.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop as a node
  config: PropTypes.object.isRequired, // Validate config prop as an object
};
