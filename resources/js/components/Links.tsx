import { JSX } from 'react';
import styles from '../../css/links.module.css';

export default function Links(): JSX.Element {
    return (
        <>
            <a className={styles.link} href="/blog">
                <span className={styles.blo}>Blo</span>
                <span className={styles.g}>g</span>
            </a>
            <a className={`${styles.link} ${styles.github}`} href="https://github.com/NickTheWilder">
                GitHub
            </a>
            <a className={styles.link} href="https://open.spotify.com/user/12166567543?si=5bf12dc3c6394190">
                <span className={styles.s}>S</span>p<span className={styles.otif}>otif</span>
                <span className={styles.y}>y</span>
            </a>
            <a className={`${styles.link} ${styles.linkedIn}`} href="https://www.linkedin.com/in/nick-wilder/">
                LinkedIn
            </a>
        </>
    );
}
