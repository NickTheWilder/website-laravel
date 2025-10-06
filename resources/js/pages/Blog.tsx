import { BlogPreview } from '@/components/BlogPreview';
import Header from '@/components/Header';
import { TagsList } from '@/components/TagList';
import { BlogPost, Quote, Tags } from '@/lib/types';
import { JSX, useEffect, useState } from 'react';
import styles from '../../css/blog.module.css';

interface BlogPageProps {
    blogPosts: BlogPost[];
    quotes: Quote[];
}

export default function Blog({ blogPosts, quotes }: BlogPageProps): JSX.Element {
    const [quote, setQuote] = useState<Quote | null>(null);

    useEffect(() => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
    }, [quotes]);

    const [activeTag, setActiveTag] = useState<Tags | null>(null);

    const filteredPosts = activeTag ? blogPosts.filter((post) => post.tags.includes(activeTag)) : blogPosts;

    const handleTagClick = (tag: Tags) => {
        setActiveTag(activeTag === tag ? null : tag);
    };

    return (
        <div style={{ display: 'block' }}>
            <Header />
            <div className={styles.intro}>
                <h1 className={styles.title}>Blog</h1>
                <p>
                    Blog will contain notes from books, courses, and maybe occasional random thoughts. Most of the notes will come from my Obsidian
                    vault served here as a backup using{' '}
                    <a className={styles.link} href="https://mdxjs.com/">
                        https://mdxjs.com/
                    </a>
                    with minimal extra formatting.
                </p>
                <br />
                <p>Notes will be added as I think they are relevant and polished enough to publish.</p>
                <div className={styles.blogContainer}>
                    <div className={styles.blogGrid}>
                        <h2 className={styles.title}>Recent Posts</h2>
                        {filteredPosts.map((post) => (
                            <BlogPreview key={post.route} title={post.title} description={post.description} date={post.date} route={post.route} />
                        ))}
                    </div>
                    <div className={styles.sidebar}>
                        <div className={styles.tags}>
                            <h2 className={styles.title}>Filter By Tags</h2>
                            <TagsList activeTag={activeTag} onTagClick={handleTagClick} blogPosts={blogPosts} />
                        </div>
                        <div className={styles.quotes}>
                            {quote !== null && (
                                <>
                                    <i className={styles.quote}>{quote?.quote}</i>
                                    <div className={styles.author}> - {quote?.author}</div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
