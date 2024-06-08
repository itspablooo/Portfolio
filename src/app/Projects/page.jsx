// src/pages/projects/index.js
import Image from 'next/image';

const allProjects = [
  {
    title: 'Project Title 1',
    description: 'Detailed description of the project goes here. Highlight key features and technologies used.',
    imageUrl: '/path/to/image1.jpg',
    repoUrl: 'https://github.com/your-repo1',
    liveUrl: 'https://your-live-site1.com',
  },
  {
    title: 'Project Title 2',
    description: 'Detailed description of the project goes here. Highlight key features and technologies used.',
    imageUrl: '/path/to/image2.jpg',
    repoUrl: 'https://github.com/your-repo2',
    liveUrl: 'https://your-live-site2.com',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section className="bg-secondary text-neutral py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">All Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <Image src={project.imageUrl} alt={project.title} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h2 className="text-2xl font-semibold text-primary mb-2">{project.title}</h2>
              <p className="text-lg text-neutral mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-highlight text-secondary font-bold py-2 px-4 rounded transition duration-300">
                  View Repo
                </a>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-highlight text-secondary font-bold py-2 px-4 rounded transition duration-300">
                  Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}