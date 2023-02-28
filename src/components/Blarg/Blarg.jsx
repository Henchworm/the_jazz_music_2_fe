import './Blarg.css';

const chrisblog = require('../../assets/chrisblog.png');

function Blarg() {
  return (
    <section className="blog-section">
    <div className="blog-container">
      <img src={chrisblog} alt="Chris excitedly playing the symbols on the floor with his legs crossed" />
      <div className="posts-container">
          <h1>Future posts here</h1>
      </div>
    </div>
  </section>
  );
}

export default Blarg;