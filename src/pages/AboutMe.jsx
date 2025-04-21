import myPhoto from '../assets/face_1080-4816.JPG'

export default function AboutMe() {
    return (
        <>
            <div>
                <h2>Michael is a full-stack developer from Salt Lake City, Utah.</h2>
                <img src={myPhoto} alt="MHD Photo" id="headshot" />
            </div>
        </>
    )
};