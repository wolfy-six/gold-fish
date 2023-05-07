/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Fish from "./Fish";

function Hero() {
  return (
    <div className="w-full h-screen md:flex md:justify-center">

      <div className="w-100% justify-center text-center flex p-3">
        <h1 className="text-[10rem]  md:text-[20rem] relative top-0 bottom-0 left-0 right-0 m-auto font-bold">
          GOLD FISH
        </h1>

        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-[100%] mt-10 sm:mt-0 h-[100%] lg:w-screen">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <Stage environment="city" intensity={0.6} enableZoom={false}>
              <Fish />
            </Stage>
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default Hero;
