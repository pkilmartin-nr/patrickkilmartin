import clsx from 'clsx'; 
import Heading from '@theme/Heading'; 
import styles from './styles.module.css'; 
import Link from '@docusaurus/Link';
import React from 'react';
import Feature from './Feature';

const FeatureList = [ 

{ 

title: 'Personal Details', 
Svg: require('@site/static/img/robot.svg').default, to: '/docs/me', 

}, 

{ 

title: 'CV', 
Svg: require('@site/static/img/electric_bolt.svg').default, to: '/docs/cv', 

}, 

{ 

title: 'Cover Letter',
Svg: require('@site/static/img/api.svg').default, to: '/docs/cover', 

}, 

];

function Feature({ Svg, title, to, description }) {
  // Wrap content so it remains identical whether it links or not
  const renderContent = () => (
    <>
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </>
  );

  return (
    <div className={clsx('col col--4')}>
      {to ? (
        <Link className={styles.featureLink} to={to}>
          {renderContent()}
        </Link>
      ) : (
        <div className={styles.featureCard}>
          {renderContent()}
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures() { 
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  ); 
}
