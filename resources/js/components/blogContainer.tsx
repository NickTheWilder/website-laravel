import { JSX, ReactNode } from 'react';
import Header from './header';
import '../../css/markdown-styles/github-dark.css';

interface BlogProps {
    children: ReactNode;
}

export default function BlogContainer(props: BlogProps): JSX.Element {
    return (
        <div style={{ display: 'block' }}>
            <Header />
            <article className="mdx-content">{props.children}</article>
        </div>
    );
}
