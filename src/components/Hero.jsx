import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="bg-secondary text-neutral py-20 flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/pabloAnimoji.png"
          alt="Animated character sitting behind an Apple laptop"
          width={250}
          height={250}
          className="rounded-full w-50 h-50 mb-4 mx-auto bg-neutral"
        />
        <h1 className="text-4xl font-bold mb-2 text-primary">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4 text-neutral">I am Pablo Moreno-Rivera, a Full-Stack Web Developer.</p>
        <div className="flex justify-center space-x-4">
          <a href="/Projects" className="bg-primary hover:bg-highlight text-secondary py-2 px-4 rounded">
            View My Projects
          </a>
          <a href="/resume.pdf" download className="bg-accent hover:bg-highlight text-secondary py-2 px-4 rounded">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}