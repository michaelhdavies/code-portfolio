export default function Project({ title, image, deployed, repo }) {
    return (
        <div className="projCard">
            <h2>{title}</h2>
            <div className="cardContent">
                <div className="infoDiv">
                    <a href={deployed}>Deployed Application</a>
                    <a href={repo}>GitHub Repository</a>
                </div>
                <div className="imgDiv">
                    <img src={image} alt={title} />
                </div>
            </div>
        </div>
    )
}