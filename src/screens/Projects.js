import { useState } from "react";
import Card from "../components/Card";
import ProjectReadMore from "../components/ProjectReadMore";
import brainWaveDemoGif from "../images/BrainWaveDemo.gif";
import brainWaveImg from "../images/BrainWave.jpg";
import forestImg from "../images/forest.jpeg";
import logoImg from "../images/logo.jpeg";
import journeyImg from "../images/journey.jpeg";
import uiDesingImg from "../images/uiDesing.jpeg";
import jokerImg from "../images/joker.jpeg";

const Projects = () => {

    const [readMoreData, setReadMoreData] = useState(false);

    const projectdData = [
        {
            img: forestImg,
            gif: forestImg,
            name: 'Illustration',
            title: 'Camp Fire',
            // description: 'Brain Wave built with ReactJS, NodeJS. It uses the OpenAI API to respond to messages with a human-like response. It also has a voice feature that can read out the response. User can ask question using voice or text.',
            // liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: logoImg,
            name: 'Logo Design',
            title: 'Little Bug',
            // description: 'Full-stack music player app is written in flutter and dart using node.js music API. Fully Functional music player with UI like Spotify app. Added 1000+ royalty-free music and information about artists. Application users can make their own playlist or collect liked songs. ',
            // liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: journeyImg,
            name: 'Logo Design',
            title: 'Journey',
            // description: 'A movie search app built with React, Next.js, and Tailwind CSS. It uses the TMDB API to fetch movies and display them.',
            // liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: uiDesingImg,
            name: 'Ui Design',
            title: 'Graphitona',
            // liveDemo: 'https://chat-client-1oud.onrender.com/'
        },
        {
            img: jokerImg,
            name: 'Shape Illustration',
            title: 'Charcter Design',
            // liveDemo: ''
        },
    ];

    const handleReadMore = (data) => {
        setReadMoreData(data);
        if (data) {
            window.location.href = "#projects";
            document.body.style.overflow = "hidden";
            //BLUR HEADER
            document.getElementById("header").style.filter = "blur(5px)";
            document.getElementById("header").style.pointerEvents = "none";
        } else {
            document.body.style.overflow = "auto";
            document.getElementById("header").style.filter = "blur(0px)";
            document.getElementById("header").style.pointerEvents = "auto";
        }
    }

    return (
        <><section id="projects">
            <div className="project-heading">
                <h3>COMPLETED PROJECTS</h3>
                <p>I have worked with multiple tools & softwares as a designer to build and maintain projects.</p>
            </div>
            <div className="project-cards">
                {
                    projectdData.map((project, index) => {
                        return (
                            <Card
                                key={index}
                                index={index + 1}
                                img={project.img}
                                gif={project.gif}
                                name={project.name}
                                title={project.title}
                                description={project.description}
                                liveDemo={project.liveDemo}
                                handleReadMore={handleReadMore}
                            />
                        )
                    })
                }
            </div>
        </section>
            {
                readMoreData && <ProjectReadMore readMoreData={readMoreData} />
            }
        </>
    )
}

export default Projects;