import Foreground from "@/public/foreground.png";
import Image from "next/image";
import { BocchiChan } from "./bocchi-chan";
import { Triangles } from "./triangles";

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
      <div className="container py-20">
        <h1 className="font-bold text-4xl">Next-gen Stack</h1>
      </div>
    </main>
  );
}
