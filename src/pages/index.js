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
        and jump-starts them into the debate.
      </>
    ),
  },
  {
    title: <>Democratic Voting</>,
    imageUrl: 'img/Votebox.svg',
    description: (
      <>
        It is important to us that every voter has fair voting shares.
        We incentivize people to distribute their share on multiple arguments
        which leverages the wisdom of the crowd.
        In the end, the relative vote share measures the importance of an argument for the decision.
      </>
    ),
  },
  {
    title: <>Decentralized Decision-Making</>,
    imageUrl: 'img/Abacus.svg',
    description: (
      <>
        Decisions are formed by accumulating all votes from the tree leaves to the root.
        Thanks to smart-contracts and digital identities on the Ethereum blockchain,
        the entire curation, voting, and tallying process is transparent, verifiable, and resilient,
        which legitimizes the decision.
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
      description="ArborVote is a decentralized platform for rational decision-making by voting on argument trees on the Ethereum blockchain.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>&nbsp;&nbsp;
            <Link
              className={clsx(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted,
                    )}
                    to={'https://github.com/ArborVote/whitepaper/releases/latest/download/whitepaper.pdf'}>
                    Whitepaper
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
