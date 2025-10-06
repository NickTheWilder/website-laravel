import { BlogPost, Tags } from '@/lib/types';
import { JSX } from 'react';
import styles from '../../css/tagList.module.css';

function getTagCounts(blogPosts: BlogPost[]): { tag: Tags; count: number }[] {
    const tagCountMap = new Map<Tags, number>();

    blogPosts.forEach((post) => {
        post.tags.forEach((tag) => {
            const currentCount = tagCountMap.get(tag) || 0;
            tagCountMap.set(tag, currentCount + 1);
        });
    });

    return Array.from(tagCountMap.entries())
        .map(([tag, count]) => ({
            tag,
            count,
        }))
        .sort((a, b) => b.count - a.count); // sort by popularity
}

interface TagsListProps {
    activeTag: Tags | null;
    onTagClick: (tag: Tags) => void;
    blogPosts: BlogPost[];
}

export function TagsList(props: TagsListProps): JSX.Element {
    const tagCounts = getTagCounts(props.blogPosts);

    return (
        <div className={styles.tagsContainer}>
            {tagCounts.map(({ tag }) => (
                <button key={tag} className={`${styles.tag} ${props.activeTag === tag ? styles.active : ''}`} onClick={() => props.onTagClick(tag)}>
                    {tag}
                </button>
            ))}
        </div>
    );
}
