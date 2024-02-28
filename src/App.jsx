import { useEffect, useState } from 'react';
import { TVShowAPI } from './api/tv-show';
import './global.css';
import s from './style.module.css';
import { BACKDROP_BASE_URL } from './config.js';
import { TVShowDetails } from './components/TVShowDetails/TVShowDetails.jsx';
import { Logo } from './components/Logo/Logo';
import logo from './assets/images/logo.png';
import { TVShowList } from './components/TVShowList/TVShowList.jsx';
import { SearchBar } from './components/SearchBar/SearchBar.jsx';

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setCurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert('Error while searching popular series');
    }
  }
  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert('Error while searching the recommandations');
    }
  }
  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert('Error while searching the serie');
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  //If currentTVShow change, we want to update the list of recommendations based on that
  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : 'black',
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo image={logo} title="MOTION-Series" />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={searchTVShow} />
          </div>
        </div>
      </div>

      <div className={s.tv_show_details}>
        {currentTVShow && <TVShowDetails tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendationList && recommendationList.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
