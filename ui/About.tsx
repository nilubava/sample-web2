import { lightColors } from "@/ui/brandColors";
import { FOCUS_VISIBLE_OUTLINE } from "@/ui/constants";
import { RainbowHighlight } from "@/ui/RainbowHighlight";
import { shuffleArray } from "@/ui/shuffleArray";
import { useIsFontReady } from "@/ui/useIsFontReady";
import cx from "clsx";
import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { RoughNotationGroup } from "react-rough-notation";

const About = () => {
  // before animation, detect if custom fonts are loaded, so <RoughNotation />
  // SVG's are correctly positioned over the elements
  const isFontReady = useIsFontReady();

  const [colors, setColors] = React.useState<string[]>([]);

  // shuffle our colors and store them in state so the order is persisted during
  // React re-renders
  React.useEffect(() => {
    setColors(shuffleArray(lightColors));
  }, []);

  return (
    <div className="container px-4 mx-auto text-amber-200">
      <div className="lg:flex lg:flex-wrap lg:-mx-4">
        <div className="lg:w-2/3 lg:px-4">
          Test Next.js app

          <div>
            <div className="flex flex-wrap mt-6 space-x-4">
              <a
                href="https://github.com/nilubava"
                target="_blank"
                className={cx(
                  "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-700 border border-transparent rounded-full shadow-sm hover:bg-gray-800",
                  FOCUS_VISIBLE_OUTLINE
                )}
              >
                View Github
              </a>
              <a
                href="https://www.linkedin.com/in/nilufar-bava/"
                target="_blank"
                className={cx(
                  "inline-flex items-center lg:px-8 px-4 py-2 font-medium text-white bg-gray-700 border border-transparent rounded-full shadow-sm hover:bg-gray-800",
                  FOCUS_VISIBLE_OUTLINE
                )}
              >
                View LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-sm mt-12 lg:w-1/3 lg:px-4 lg:mt-0">
          <Tilt
            transitionSpeed={15000}
            tiltMaxAngleY={7}
            tiltMaxAngleX={7}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareBorderRadius="11px"
            tiltReverse={true}
            trackOnWindow={true}
          >
            <div className="shadow-2xl rounded-xl">
              <div
                className="shadow-xl rounded-xl"
                // unfortunate hack to remove the weird whitespace left by
                // next/image wrapper div
                style={{ fontSize: "0" }}
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={752}
                  height={1001}
                  priority={true}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default About;
