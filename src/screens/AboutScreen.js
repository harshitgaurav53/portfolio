import { useEffect, useRef, useState } from "react";

const AboutScreen = () => {
    const experienceYears = new Date().getFullYear() - 2022;

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

        const aboutHeading = document.querySelector(".about-heading");
        const aboutContent = document.querySelector(".about-content");
        if (isVisible) {
            aboutHeading.classList.add("animate__fadeInUp");
            aboutContent.classList.add("animate__fadeInUp");
        } else {
            aboutHeading.classList.remove("animate__fadeInUp");
            aboutContent.classList.remove("animate__fadeInUp");
        }
    }, [isVisible]);

    return (
        <section id="about">
            <div className="about-container" ref={domRef}>

                <div className="about-heading">
                    <h2>About</h2>
                    <h4>ME, MYSELF AND I</h4>
                </div>
                <div className="about-content">
                    <p>Strongly seasoned and hardworking Entry-Level Graphic
                        Designer with extraordinary creative thinking and project
                        design abilities.
                    </p>
                    <p>
                        Adept multitasker with the ability to bring
                        simultaneous graphic design projects to completion with
                        complete efficiency and accuracy.
                    </p>
                    <p>
                        Able to work well
                        independently or as a member of a professional graphic design
                        team. Hands-on in transforming complex information and
                        concepts into attractive, human-centered designs.
                    </p>

                </div>
            </div>
        </section>
    )
}

export default AboutScreen;