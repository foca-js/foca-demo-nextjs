import type { NextPage } from 'next';
import Head from 'next/head';

import Counter from '../components/counter/Counter';
import styles from '../styles/Home.module.css';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Foca</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
        <p>
          Edit <code>src/pages/index.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
          ,<span> and </span>
          <a
            className={styles.link}
            href="https://foca.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Foca
          </a>
        </span>
      </header>
    </div>
  );
};

export default IndexPage;
