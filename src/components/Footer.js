import Socials from "./Socials";

const Footer = () => {
    return (
        <section id="contact">
            <footer>
                <div className="footer-top">
                    <h3>CONTACT ME</h3>
                    <p>Leave a message on any of my social media, i'll reach out to you soon.</p>
                    <Socials />
                </div>
                <div className="footer-bottom">
                    © {new Date().getFullYear()} Harshit Gaurav. All rights reserved.
                </div>
            </footer>
        </section>
    )

}

export default Footer;