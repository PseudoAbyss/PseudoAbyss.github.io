import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Station 0D',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Sci-fi 2D immersive-sive
      </>
    ),
  },
  {
    title: 'The Pure Box',
    imageUrl: 'img/pure-box.jpg',
    description: (
      <>
        Album by Pseudo Abyss
      </>
    ),
  },
  {
    title: '0D',
    imageUrl: 'img/pure-box.jpg',
    description: (
      <>
        Album by Pseudo Abyss
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('pages/games/')}>
              Games
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('pages/music/')}>
              Music
            </Link>
          </div>
        </div>
      </header>
      <main className="main_home">
      </main>
    </Layout>
  );
}

export default Home;
