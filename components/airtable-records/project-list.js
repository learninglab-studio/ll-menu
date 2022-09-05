import ProjectCard from "./project-card"

module.exports = function ProjectList(props) {
    return (
        <div>
            <h2>Projects</h2>
                {props.projects.map((project, i) => {
                    return (
                        <div key={i} >
                            <ProjectCard project={project} />
                        </div>
                    )
                })}
        </div>
    )
}