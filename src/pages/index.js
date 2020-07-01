import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Trees of Rational Arguments</>,
    imageUrl: 'img/Tree.svg',
    description: (
      <>
        We don't want to live in a world where we can only say yes or no.
        Deliberation and rationalism should be the basis for important decisions.
        Creation of arguments in a tree structure invites people to consider multiple perspectives
        and jump-start them into the debate.
      </>
    ),
  },
  {
    title: <>Democratic Quadratic Voting on Arguments</>,
    imageUrl: 'img/Votebox.svg',
    description: (
      <>
        It is important to us that every voter has equal voting shares.
        With quadratic vote cost, we incentivize people to distribute their share on multiple arguments.
        This self-imposed weighting measures the importance of arguments for the decision
        and leverages the wisdom of the crowd.
      </>
    ),
  },
  {
    title: <>Decentralized Decision-Making</>,
    imageUrl: 'img/Rocket.svg',
    description: (
      <>
        The decision is formed by accumulating all votes from the leafs of the tree to the root.
        Thanks to smart-contracts and external identity providers on the Ethereum blockchain,
        the entire creation, voting, and counting process is transparent, verifiable, and resilient.
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
      title={`Welcome to ${siteConfig.title}`}
      description="ArborVote is a decentralized platform for rational decision-making by quadratic voting on argument trees on the Ethereum blockchain.">
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
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
