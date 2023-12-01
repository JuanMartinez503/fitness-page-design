type InstructorComponentProps={
    src:string;
    name:string;
    role:string;
}
export default function InstructorComponent ({src,name,role}:InstructorComponentProps){
    
    return (
        <div className="instructor-component">
            <img src={src} alt="all instructors" />
            <div className="instructor-background">
            <h2>{name}</h2>
            <p>{role}</p>
            <div className="socials">
                <div><i className="fa-brands fa-facebook"></i></div>
                <div> <i className="fa-solid fa-phone"></i></div>
                <div> <i className="fa-brands fa-instagram"></i></div>
                <div> <i className="fa-brands fa-twitter"></i></div>
            </div>
            </div>
        </div>
    )
}