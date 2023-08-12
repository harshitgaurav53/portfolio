import { useEffect, useRef, useState } from "react";

const SkillsScreen = () => {

    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                setVisible(entry.isIntersecting)
            });
        });
        observer.observe(domRef.current);
    }, []);

    useEffect(() => {

        const aboutHeading = document.querySelector(".skills-heading");
        const aboutContent = document.querySelector(".skills-container");
        if (isVisible) {
            aboutHeading.classList.add("animate__fadeInUp");
            aboutContent.classList.add("animate__fadeInUp");
        } else {
            aboutHeading.classList.remove("animate__fadeInUp");
            aboutContent.classList.remove("animate__fadeInUp");
        }
    }, [isVisible]);

    return (
        <section id="skills" ref={domRef}>

            <div className="skills-heading" >
                <h2>SKILLS</h2>
            </div>

            <div className="skills-container">
                <div className="skills-content">
                    {/* <h5>SOFTWARES</h5> */}
                    <p>Adobe Photoshop</p>
                    <p>Adobe Illustrator</p>
                    <p>Coreldraw</p>
                    <p>Indesign</p>
                    <p>Canva</p>

                </div>
                <div className="skills-content">
                    {/* <h5>&nbsp;</h5> */}
                    <p>After Effects</p>
                    <p>Premier Pro</p>
                    <p>Adobe XD</p>
                    <p>Figma</p>
                    <p>Power Point</p>
                </div>

                {/* <div className="skills-content">
                    <h5>DATABASE</h5>
                    <p>Firebase</p>
                    <p>Redis</p>
                    <p>Mongodb</p>
                    <p>MySql</p>
                </div> */}
                {/* <div className="skills-content">
                    <h5>TOOL</h5>
                    <p>Docker</p>
                    <p>Git & Github</p>
                    <p>Kubernetes</p>
                    <p>Digital Ocean</p>
                    <p>Heroku</p>
                    <p>Render</p>

                </div> */}
            </div>
        </section>
    );
}

export default SkillsScreen;