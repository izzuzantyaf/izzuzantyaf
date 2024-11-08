import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero h-dvh flex flex-col justify-center items-center mx-6">
        <h1 className="text-8xl text-center">
          Hi there. <span className="font-extrabold">I&apos;m Izzu</span>
        </h1>

        <Image
          alt="Hero section illustration"
          src={"/images/memoji.002.png"}
          width={396}
          height={396}
          className="mt-24"
        />
      </section>
    </>
  );
}
