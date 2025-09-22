import projects from "../resources/projects.json";
import profilePic from "../assets/profile-pic.jpg";
import "./home.css";

function Home() {
    return (
        <div>
            <AboutSection />
            <ProjectSection />
        </div>
    );
}

function AboutSection() {
    return (
        <div className="about">
            <h3 className="section-title">
                About
            </h3>
            <div className="content">
                <img className="profile-pic" src={profilePic}></img>
                <p>Catherine Master is a Software Developer,...</p>
            </div>
        </div>
    );
}

function ProjectSection() {
    return (
        <div className="projects-section">
            <h3 className="section-title">Projects</h3>
            <div className="projects-list">
                {projects.projects.map((p, idx) => (
                    <ProjectCard
                        key={idx}
                        title={p.title}
                        description={p.description}
                        link={p.link}
                    />
                ))}
            </div>
        </div>
    );

}

function ProjectCard({ title, description, link }) {
    return (
        <div className="project-card">
            <p className="project-title">{title}</p>
            <p className="project-description">{description}</p>
            <a href={link}>View Project</a>
        </div>
    );
}

function Contact() {
    return (
        <div className="contact-info">
            <link>LinkedIn</link>
            <link>GitHub</link>
            <link>Email</link>
        </div>
    );
}

export default Home;