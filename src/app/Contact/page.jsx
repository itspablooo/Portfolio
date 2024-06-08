import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from '../../components/Contact';

export default function ContactPage() {
  return (
    <section className="bg-secondary text-neutral py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Contact Me</h1>
          <p className="text-lg mb-4">I'd love to hear from you! Please fill out the form below or reach out via email or social media.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mb-8">
          <Contact />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="mb-4">Feel free to reach out via social media.</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/itspablooo" target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-primary transition duration-300">
              <FaGithub size={32} />
            </a>
            <a href="https://www.linkedin.com/in/pablo-moreno-rivera-a3a53a1b8/" target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-primary transition duration-300">
              <FaLinkedin size={32} />
            </a>
            <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" className="text-neutral hover:text-primary transition duration-300">
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="mb-4">Here are some common questions I receive from clients and collaborators.</p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">What services do you offer?</h3>
            <p className="mb-4">I offer a range of web development services, including front-end and back-end development, full-stack development, and more. Feel free to reach out with your project details.</p>
            <h3 className="text-lg font-semibold mb-2">What is your availability?</h3>
            <p className="mb-4">I am generally available during business hours (9 AM - 5 PM) from Monday to Friday. However, I am flexible and can accommodate different time zones and urgent requests.</p>
            <h3 className="text-lg font-semibold mb-2">How can I collaborate with you?</h3>
            <p>If you have a project in mind or would like to collaborate, please fill out the contact form or reach out via email or social media. I'll get back to you as soon as possible.</p>
          </div>
        </div>
      </div>
    </section>
  );
}