import { useState, useEffect } from 'react';
import { getBlargPosts } from '../../apiCalls';
import Post from './Post/Post';
import './Blarg.css';

const chrisblog = require('../../assets/chrisblog.png');

function Blarg() {
  const [blargPosts, setBlargPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getBlargPosts()
      .then(data => {
        setBlargPosts(data);
        setLoading(false);
        setError('');
      })
      .catch(error => {
        setError(`Oops, that's a ${error.message}. Please refresh and try again!`)
        setLoading(false);
      })
  }, []);

  const renderSection = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    } else if (!loading && blargPosts.length) {
      const displayPosts = blargPosts.map(post => {
        return (
          <Post
            key={post.id}
            title={post.title}
            date={post.created_at}
            body={post.post}
          />
        )
      });
      return displayPosts;
    } else if (!loading && !error && !blargPosts.length) {
      return <h1>No blog posts, yet!</h1>
    } else {
      return null;
    }
  }

  return (
    <section className="blog-section">
    <div className="blog-container">
      <img src={chrisblog} alt="Chris excitedly playing the symbols on the floor with his legs crossed" />
      <div className="posts-container">
          {error && <h1>{error}</h1>}
          {renderSection()}
      </div>
    </div>
  </section>
  );
}

export default Blarg;