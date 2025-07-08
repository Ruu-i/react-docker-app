type ProjectProps = {
  title: string;
  description: string;
  link?: string;
};

const ProjectCard = ({ title, description, link }: ProjectProps) => {
  return (
    <div style={{
      border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '8px 0',
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
};

export default ProjectCard;
