import Links from '@/components/links';
import { JSX } from 'react';
import styles from '../../css/home.module.css';

export default function Home(): JSX.Element {
    return (
        <div style={{ minHeight: '100vh', display: 'flex' }}>
            <div className={styles.container}>
                <p className={styles.hero}>Nick Wilder</p>
                <p className={styles.howdy}>Howdy! 🤠</p>
                <p className={styles.content}>
                    I&apos;m Nick, software engineer by day, tinkering by night. Currently a software engineer working with&nbsp;
                    <span className={styles.lang}>React</span> and <span className={styles.lang}>C#</span>, with a bit of experience in many other
                    tech stacks and frameworks.
                </p>
                <p className={styles.content}>Always learning something new and trying out new technologies I find interesting.</p>
                <footer className={styles.footer}>
                    <div className={styles.links}>
                        <h4 className={styles.linkTitle}>Links</h4>
                        <Links />
                    </div>
                </footer>
            </div>
        </div>
    );
}
