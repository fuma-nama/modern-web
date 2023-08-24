import Foreground from "@/public/foreground.png";
import Image from "next/image";
import { BocchiChan } from "./bocchi-chan";
import { Triangles } from "./triangles";
import { Globe } from "./globe";
import { Stars } from "./stars";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand">
      <div className="relative z-[2] h-screen overflow-hidden bg-[url('/background.png')] bg-cover">
        <Triangles />
        <div className="px-8 py-[32vh] xl:px-[20vw]">
          <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
            The Modern Web.
          </h1>
          <p className="max-w-2xl text-muted-foreground text-sm lg:text-base">
            In the new era, web developers started to use bleeding edge
            technologies to achieve high-quality results that is inspiring and
            breathtaking.
          </p>
          <button className="text-brand bg-foreground rounded-md px-4 py-2 font-medium text-sm mt-8 transition-colors hover:bg-foreground/80 focus-visible:outline-none">
            Learn More
          </button>
          <Image
            alt=""
            width={400}
            height={400}
            quality={100}
            src={Foreground}
            className="pointer-events-none min-w-[400px] -ml-7 -mt-16"
          />
        </div>
        <div className="absolute top-[50vh] right-0 min-[1700px]:top-40 min-[1700px]:right-40">
          <BocchiChan />
        </div>
      </div>
      <div
        id="stars-container"
        className="relative z-[2] w-full mx-auto flex flex-col items-center py-40 text-center"
      >
        <Stars />
        <h1 className="font-bold text-3xl mb-4 px-8 lg:text-5xl">
          Next Generation Stack
        </h1>
        <p className="text-muted-foreground px-8">
          Nothing is more interesting than a new framework, and replacing your
          old stack with something new.
        </p>
        <div className="w-full flex flex-col items-center h-[250px] overflow-hidden lg:h-[500px]">
          <Globe />
        </div>
        <div className="mt-[-100px] p-8 bg-gradient-to-b from-white to-gray-500 border rounded-xl shadow-xl shadow-black/30 flex flex-col gap-4 h-[140px] items-center">
          <div className="w-fit h-fit p-1 bg-gradient-to-b from-brand to-white rounded-md">
            <div className="inline-flex items-center justify-center font-medium bg-gradient-to-br from-black via-gray-700 to-black w-9 h-9 rounded-md">
              ?
            </div>
          </div>

          <p className="text-sm">The Best Tool for Web Developers</p>
        </div>
      </div>
    </main>
  );
}
