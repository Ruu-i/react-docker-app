import ProjectCard from '../components/ProjectCard';

type Project = {
  title: string;
  description: string;
  link?: string;
};

const Home = () => {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my projects and skills.",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "A simple shopping cart app using React and Firebase.",
      link: "#",
    }
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Hello, I'm Ruwani 👋</h1>
      <p>I'm a software developer passionate about cloud engineering and front-end development.</p>

      <h2 style={{ marginTop: '2rem' }}>My Projects</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default Home;
