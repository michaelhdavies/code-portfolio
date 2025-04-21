import resumejpg from "../assets/resume-scn.jpg";
import resumepdf from "../assets/resume.pdf";

export default function Resume() {
  return (
    <>
      <div className="page">
        <h2>Dev Skills: HTML, JavaScript, CSS, Python </h2>
        <a href={resumepdf} download="resume.pdf">Click to download full resume</a>
        <img src= {resumejpg} className="resume" />
      </div>
    </>
  )
};