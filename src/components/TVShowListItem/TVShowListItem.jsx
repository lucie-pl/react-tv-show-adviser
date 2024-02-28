import { BACKDROP_MINIATURE_BASE_URL } from '../../config';
import s from './style.module.css';

export function TVShowListItem({ tvShow, onClick }) {
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      <img
        className={s.image}
        alt={tvShow.name}
        src={BACKDROP_MINIATURE_BASE_URL + tvShow.backdrop_path}
      />
      <div className={s.title}>{tvShow.name.toUpperCase()}</div>
    </div>
  );
}
