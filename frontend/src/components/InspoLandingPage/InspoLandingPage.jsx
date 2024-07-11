import React from 'react';
import styles from './InspoLanding.module.css';
import { videosData, ideasData, popularData } from './InspoData';

const InspoLandingPage = () => {
    return (
        <div className={styles.landing_wrapper}>
            <div className={styles.creator_wrapper}>
                {videosData.map((creator) => (
                    <div key={creator.id} className={styles.creatorItem}>
                        <video src={creator.video} autoPlay muted className={styles.creatorVideo}></video>
                        <img className={styles.circleOverlay} src={creator.profile} alt={creator.id} />
                    </div>
                ))}
            </div>
            <div className={styles.ideas_wrapper}>
                <h4>Ideas for you</h4>
                <span>We curated ideas for you based on your most recent search</span>
                <div className={styles.idea_wrapper}>
                    {ideasData.map((idea) => (
                        <div key={idea.id} className={styles.ideaItem}>
                            <img src={idea.image} alt={idea.title} className={styles.ideaImage} />
                            <div className={styles.textOverlay}>{idea.title}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.popular_wrapper}>
                <h4>Popular on Myntra</h4>
                <div className={styles.idea_wrapper}>
                    {popularData.map((idea) => (
                        <div key={idea.id} className={styles.ideaItem}>
                            <img src={idea.image} alt={idea.title} className={styles.ideaImage} />
                            <div className={styles.textOverlay}>{idea.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default InspoLandingPage