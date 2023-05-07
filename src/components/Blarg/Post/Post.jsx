import { getDisplayDate } from '../../../helpers';
import './Post.css';

function Post({ title, date, body }) {
  return (
    <article className='post-card'>
      <h1>{title}</h1>
      <p className='post-date'><b>{getDisplayDate(date)}</b></p>
      <p>{body}</p>
    </article>
  )
}

export default Post;