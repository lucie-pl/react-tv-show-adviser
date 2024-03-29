import s from './style.module.css';
import { FiveStarsRating } from '../FiveStarsRating/FiveStarsRating';

export function TVShowDetails({ tvShow }) {
  const rating = (Math.round(tvShow.vote_average * 10) / 10 / 2).toFixed(1);

  return (
    <div>
      <div className={s.title}>{tvShow.name.toUpperCase()}</div>
      <div className={s.rating_container}>
        <FiveStarsRating rating={rating} />
        <div className={s.rating}>{rating}/5</div>
      </div>
      <div className={s.synopsis}>{tvShow.overview}</div>
    </div>
  );
}
