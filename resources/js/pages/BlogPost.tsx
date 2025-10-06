import BlogContainer from '@/components/blogContainer';
import { BlogPost } from '@/lib/types';
import { JSX } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
    post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps): JSX.Element {
    return (
        <BlogContainer>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                {post.content}
            </ReactMarkdown>
        </BlogContainer>
    );
}
