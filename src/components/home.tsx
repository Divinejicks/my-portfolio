import { useState } from "react";
import { Menu, X } from "lucide-react";
import profileImage from "../assets/profile.jpg"
import backImage from "../assets/backImage.png"
import pkLogo from "../assets/pkLogo.png"
import enkLogo from "../assets/enkLogo.png"
import cibLogo from "../assets/cibLogo.png"
import gssLogo from "../assets/gssLogo.jpg"
import glsLogo from "../assets/glsLogo.png"
import bpLogo from "../assets/bpLogo.png"
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
                <div className="flex items-center space-x-4">
                    <img src="/your-logo.png" alt="Logo" className="h-10" />
                    <span className="text-xl font-bold">Mbuh Divine Cho</span>
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center py-4 space-y-4 bg-gray-800">
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#projects" className="hover:text-gray-400">Projects</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </div>
            )}

            {/* Hero Section */}
            <div
                className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center" // Set height and background properties
                style={{ backgroundImage: `url(${backImage})` }} // Inline style for dynamic background
            >
                <div className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}> {/* Overlay for better text visibility */}
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"> {/* Increased font size */}
                            Welcome to My Portfolio
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300"> {/* Larger, lighter text */}
                            Blockchain developer | Full-Stack Developer
                        </p>
                        {/* Optional: Add a call to action button here */}
                        <a href="https://drive.google.com/file/d/10meeEhwoyw_oI_FMyX1S6Zo-vCdO2O7R/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                            <button className="mt-8 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg cursor-pointer">
                                Checkout My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div id="about" className="px-6 py-16 bg-indigo-800 text-white"> {/* Changed background color */}
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12"> {/* Added flex and container for better layout */}
                    <div className="md:w-1/2"> {/* Image container */}
                        <img
                            src={profileImage}
                            alt="Profile Image"
                            className="w-64 h-64 rounded-full border-4 border-indigo-500 mx-auto md:mx-0"
                        />
                    </div>
                    <div className="md:w-1/2 text-left"> {/* Text container */}
                        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
                        <p className="text-lg leading-relaxed"> {/* Added leading-relaxed for better readability */}
                            I am an experienced developer with 7+ years in web2 and 3+ years in web3 technologies. I have a proven track
                            record of leading development teams, collaborating remotely with global companies, and delivering end-to-end
                            projects. From structuring and building frontend, backend, and smart contracts to deploying solutions on the
                            mainnet and other web hosting platforms, I have consistently driven innovation and excellence. Passionate about
                            creating impactful and scalable systems, I thrive in both collaborative and independent roles, leveraging my
                            expertise to deliver high-quality, sustainable solutions.
                        </p>
                        <div className="mt-8">
                            <a href="#contact" className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div id="projects" className="px-6 py-16">
                <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={pkLogo} alt="PK Logo" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black">Peace Keepers</h3>
                        <p className="text-gray-800 mt-2">Peace Keepers is an unbiased and
                            decentralized system that promotes fair
                            and appropriate resolutions no matter how
                            complex the dispute is.

                            A digital platform to promote the
                            conciliation of conflicts in an agile
                            decentralized and trustworthy way.</p>
                        <p className="text-black mt-2">
                            <span className="font-bold">Role: </span>
                            <span>Co-Founder & CTO</span>
                        </p>
                        <div className="mt-4 border-t border-gray-900 pt-4">
                            <a href="https://www.peace-keepers.io/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={enkLogo} alt="Enkaare Logo" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black">Enkaare</h3>
                        <p className="text-gray-800 mt-2">
                            Enkaare is a platform that focuses on helping businesses find the best talent wherever they may be located across the globe.
                            We develop our talent so that you can develop your business, and together make an impact. We believe in connecting people to their purposeful career.
                        </p>
                        <p className="text-black mt-2">
                            <span className="font-bold">Role: </span>
                            <span>CTO</span>
                        </p>
                        <div className="mt-4 border-t border-gray-900 pt-4">
                            <a href="https://enkaare.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={cibLogo} alt="CIB Logo" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black">CodeInBlock</h3>
                        <p className="text-gray-800 mt-2">CodeInBlock, is a Decentralize Autonomous Organization (DAO) that aims to EQUIP young
                            Africans with the right SKILLS and KNOWLEDGE to be able to contribute to their community by building BLOCKCHAIN based
                            solutions that can solve most AFRICAN problems that blockchain technology can address.</p>
                        <p className="text-black mt-2">
                            <span className="font-bold">Role: </span>
                            <span>Core Member</span>
                        </p>
                        <div className="mt-4 border-t border-gray-900 pt-4">
                            <a href="https://codeinblock.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                                View Project
                            </a>
                        </div>
                    </div>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={gssLogo} alt="GSS Logo" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black">Gospel Star Search</h3>
                        <p className="text-gray-800 mt-2">Gospel star search is a voting platform with registered contestants and a view to vote for your contestant.
                            Admins have the priviledges of dropping contestants and also creating new voting sessions. Payment of vote is done on the site.
                        </p>
                        <p className="text-black mt-2">
                            <span className="font-bold">Role: </span>
                            <span>Fullstack Developer</span>
                        </p>
                        <div className="mt-4 border-t border-gray-900 pt-4">
                            <a href="https://gsscameroon.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={glsLogo} alt="GLs Logo" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black">GloSwitch</h3>
                        <p className="text-gray-800 mt-2">
                            GloSwitch is a platform that brings to you an innovative mobile and web platform that revolutionizes digital transactions, international remittance, and currency exchange.
                            With little or no experience in blockchain technology, you can transact with EASE and SECURITY on our platform.
                        </p>
                        <p className="text-black mt-2">
                            <span className="font-bold">Role: </span>
                            <span>Blockchain and Lead frontend Dev</span>
                        </p>
                        <div className="mt-4 border-t border-gray-900 pt-4">
                            <a href="https://dev-gloswitch.bandesoft.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                                View Project
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <img src={bpLogo} alt="CIB Logo" className="w-16 h-16 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-black">Black Panther</h3>
                        <p className="text-gray-800 mt-2">
                            Black Panther is a web3 platform with a lot of mind blowing features. It has a token, a lottery section, a game section and a DAO.
                            More features in the pipeline
                        </p>
                        <p className="text-black mt-2">
                            <span className="font-bold">Role: </span>
                            <span>CTO</span>
                        </p>
                        <div className="mt-4 border-t border-gray-900 pt-4">
                            <a href="https://blackpanthertkn.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                                View Project
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="px-6 py-16 bg-indigo-800 text-white text-center">
                <div className="max-w-3xl mx-auto"> {/* Added container for better width control */}
                    <h2 className="text-3xl font-semibold mb-8">Contact</h2> {/* Increased margin */}
                    <p className="text-lg mb-8 leading-relaxed"> {/* Added leading-relaxed and margin */}
                        I'm always open to discussing new opportunities and collaborations. Feel free to reach out!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8"> {/* Flexbox for responsive layout */}
                        <div className="text-left md:w-1/3"> {/* Email */}
                            <FaEnvelope className="text-3xl mb-2 text-indigo-500" />
                            <a href="mailto:mbuhdivinecho@gmail.com" className="text-lg hover:text-indigo-300">
                                mbuhdivinecho@gmail.com
                            </a>
                        </div>
                        <div className="text-left md:w-1/3"> {/* LinkedIn */}
                            <FaLinkedin className="text-3xl mb-2 text-indigo-500" />
                            <a href="https://www.linkedin.com/in/mbuh-divine-cho-257858131/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-indigo-300">
                                LinkedIn Profile
                            </a>
                        </div>
                        <div className="text-left md:w-1/3"> {/* GitHub */}
                            <FaGithub className="text-3xl mb-2 text-indigo-500" />
                            <a href="https://github.com/Divinejicks?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-indigo-300">
                                GitHub Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-center py-4">
                <p className="text-gray-400">&copy; {new Date().getFullYear()} Jicks. All rights reserved.</p>
            </footer>
        </div>
    );
};
