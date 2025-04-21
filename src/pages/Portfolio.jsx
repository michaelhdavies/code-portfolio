import Project from '../components/Project';
import tab from "../assets/tab-scn.jpg";
import timings from "../assets/timings-scn.jpg";
import lazy from "../assets/lazy-scn.jpg";
import kanban from "../assets/kanban-scn.jpg";
import weather from "../assets/weather-scn.jpg";
import code from "../assets/code-scn.jpg";



export default function Portfolio() {

  const projects = [
    {
      title: "Tab Editor",
      image: tab,
      deployed: "https://tab-editor-fe6m.onrender.com/",
      repo: "https://github.com/michaelhdavies/tab-editor"
    },
    {
      title: "Page Timings",
      image: timings,
      deployed: "",
      repo: "https://github.com/carlbr3/Page-Timings"
    },
    {
      title: "The Lazy Gourmet",
      image: lazy,
      deployed: "",
      repo: "https://github.com/els-or/The-Lazy-Gourmet"
    },
    {
      title: "Kanban Board",
      image: kanban,
      deployed: "https://kanban-board-7v57.onrender.com/",
      repo: "https://github.com/michaelhdavies/kanban-board"
    },
    {
      title: "Weather Dashboard",
      image: weather,
      deployed: "https://weather-dashboard-mhd-2025.onrender.com/",
      repo: "https://github.com/michaelhdavies/weather-dashboard"
    },
    {
      title: "Code Portfolio",
      image: code,
      deployed: "",
      repo: "https://github.com/michaelhdavies/code-portfolio"
    },
  ]
  return (
    <>
    <div className="page">
      {projects.map((project) => {
        return (
          <Project {...project} key={project.title} />
        )
      })}
    </div>
    </>
    )
};