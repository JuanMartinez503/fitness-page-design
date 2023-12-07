import React from 'react';

type ImageContainerProps = {
  src: string;
  name: string;
  duration: string;
};

export default function ImageContainer({ src, name, duration }: ImageContainerProps) {
  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${src})`,
  };

  return (
    <div className="image-container" style={containerStyle}>
      <div >
      <div className="exercise-content">
      <h3 className="name">{name}</h3>
        <p className="duration">{duration}</p>
      </div>
      </div>
    </div>
  );
}
