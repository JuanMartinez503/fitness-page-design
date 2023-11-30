import React from "react"

type ComponentOfferedProps = {
    src: string;
    duration:string;
    className:string;
}

export default function ComponentOffered ({src,className,duration}:ComponentOfferedProps){
const backgroundImage:React.CSSProperties = {
backgroundImage:`url(${src})`
}
    return (
        <div className="classes-offered">
            <div className="classes-image" style={backgroundImage}>
            <div className="classes-description">
                <p>
                Duration: {duration}
                </p>
                <h3>{className}</h3>
            </div>
            </div>
      
        </div>
    )
}