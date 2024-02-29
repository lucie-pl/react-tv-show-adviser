import { PROVIDER_LOGO_URL } from '../../config';
import s from './style.module.css';

export function TVShowProvidersListItem({ tvShowProviders }) {
  return (
    <div className={s.providers}>
      {tvShowProviders.map((tvShowProvider) => {
        return (
          <img
            key={tvShowProvider.provider_id}
            className={s.logo}
            src={PROVIDER_LOGO_URL + tvShowProvider.logo_path}
            alt={tvShowProvider.provider_name}
          />
        );
      })}
      <p className={s.just_watch}>
        Visit <a href="https://www.justwatch.com/ca/tv-show/lost">JustWatch </a>
        for more information.
      </p>
    </div>
  );
}
