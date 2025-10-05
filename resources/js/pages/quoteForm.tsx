import { useForm } from '@inertiajs/react';
import { JSX } from 'react';
import styles from '../../css/quoteForm.module.css';

export default function QuoteForm({ success }: { success: string | null }): JSX.Element {
    const { data, setData, post, processing, errors } = useForm({ author: '', quote: '' });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post('/quotes');
        data.author = '';
        data.quote = '';
    }

    return (
        <div className={styles.container}>
            {success && <div className={styles.success}>{success}</div>}
            <h1 className={styles.title}>Quote Form</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldGroup}>
                    <label htmlFor="author" className={styles.label}>
                        Author:
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={data.author}
                        onChange={(e) => setData('author', e.target.value)}
                        className={styles.input}
                    />
                    {errors.author && !data.author && <span className={styles.error}>{errors.author}</span>}
                </div>
                <div className={styles.fieldGroup}>
                    <label htmlFor="quote" className={styles.label}>
                        Quote:
                    </label>
                    <textarea
                        id="quote"
                        name="quote"
                        value={data.quote}
                        onChange={(e) => setData('quote', e.target.value)}
                        className={styles.textarea}
                    />
                    {errors.quote && !data.quote && <span className={styles.error}>{errors.quote}</span>}
                </div>
                <button type="submit" disabled={processing} className={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}
