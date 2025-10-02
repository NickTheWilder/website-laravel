import { JSX } from 'react';
import styles from '../../css/header.module.css';
import Links from './links';

export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <a className={styles.name} href="/">
                Home
            </a>
            <Links />
        </header>
    );
}
