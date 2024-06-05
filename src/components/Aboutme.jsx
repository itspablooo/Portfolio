import Image from 'next/image'


export default function Aboutme() {
    return (
        <div>
            <div>
                <Image
                    src="/pabloAnimoji.png"
                    alt="Animated character sitting behind an Apple laptop"
                    width={250}
                    height={250}
                />
            </div>
            <div>
                <h1>
                    Pablo Moreno-Rivera
                </h1>
                <p>
                    Hello! I'm Pablo Moreno-Rivera, a passionate Full-Stack Web Developer with a background in desktop support and IT services. With a strong foundation in both front-end and back-end technologies, I aim to build seamless and efficient web applications that make a differance.
                </p>
                <p>
                    Welcome to my portfolio!
                </p>
            </div>
        </div>
    )
}