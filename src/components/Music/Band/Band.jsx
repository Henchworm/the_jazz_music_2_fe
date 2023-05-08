import './Band.css';

function Band({ name, desc, imgSrc, imgAlt }) {
  return (
    <article className="band-card">
      <img src={imgSrc} alt={imgAlt} />
      <div className="band-text">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
    </article>
  )
}

export default Band;