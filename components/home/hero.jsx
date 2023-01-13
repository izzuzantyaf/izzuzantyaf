export default function Hero() {
  return (
    <div className="hero px-[20px] dark:bg-gray-900">
      <div className="container flex flex-col mx-auto  min-h-[75vh] justify-center gap-10">
        <div className="greeting">
          <h1 className="text-5xl md:text-6xl font-extrabold dark:text-gray-300">
            Hi there.{" "}
            <span className="text-blue-500 whitespace-nowrap">
              I&apos;m Izzu
            </span>
          </h1>
          <p className="mt-[16px] text-3xl dark:text-gray-300">Web Engineer</p>
        </div>
      </div>
    </div>
  );
}
