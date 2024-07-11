import React from 'react';
import styles from './InspoLanding.module.css'
import idea1 from '../../assets/idea1.png';
import idea2 from '../../assets/idea2.png';
import idea3 from '../../assets/idea3.png';
import idea4 from '../../assets/idea4.png';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import profile1 from '../../assets/profile1.jpg';
import profile2 from '../../assets/profile2.jpg';
import profile3 from '../../assets/profile3.jpg';
import popular1 from '../../assets/foryou1.png';
import popular2 from '../../assets/foryou2.png';


const videos = [
    {
        id: 1,
        video: video1,
        profile: profile1,
    },
    {
        id: 2,
        video: video2,
        profile: profile2
    },
    {
        id: 3,
        video: video3,
        profile: profile3
    },
];

const ideas = [
    {
        id: 1,
        image: idea1,
        title: 'Clean Girl Aesthetic',
    },
    {
        id: 2,
        image: idea2,
        title: 'Euphoria Makeup Ideas',
    },
    {
        id: 3,
        image: idea3,
        title: 'Chikankari lahenga designs',
    },
    {
        id: 4,
        image: idea4,
        title: 'Boho Balcony Decor',
    },
]

const popular = [
    {
        id: 1,
        image: popular1,
        title: 'Summer Vacay Fits',
    },
    {
        id: 2,
        image: popular2,
        title: '2024 Bridal Essentials',
    },
    {
        id: 3,
        image: idea3,
        title: 'Chikankari lahenga designs',
    },
    {
        id: 4,
        image: idea4,
        title: 'Boho Balcony Decor',
    },
]

const InspoLandingPage = () => {
    return (
        <div className={styles.landing_wrapper}>
            <div className={styles.creator_wrapper}>
                {videos.map((creator) => (
                    <div key={creator.id} className={styles.creatorItem}>
                        <video src={creator.video}  autoPlay muted className={styles.creatorVideo}></video>
                        <img className={styles.circleOverlay} src={creator.profile} alt={creator.id}/>
                    </div>
                ))}
            </div>
            <div className={styles.ideas_wrapper}>
                <h4>Ideas for you</h4>
                <span>We curated ideas for you based on your most recent search</span>
                <div className={styles.idea_wrapper}>
                    {ideas.map((idea) => (
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
                    {popular.map((idea) => (
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