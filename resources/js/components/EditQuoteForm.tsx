import { Quote } from '@/lib/types';
import { useForm } from '@inertiajs/react';
import { useEffect } from 'react';
import styles from '../../css/EditQuoteForm.module.css';

export function EditQuoteForm({ selectedQuote, onCancel }: { selectedQuote: Quote | null; onCancel: () => void }) {
    const { data, setData, post, put, processing, errors, delete: destroy } = useForm({ author: '', quote: '' });

    useEffect(() => {
        if (selectedQuote) {
            setData('author', selectedQuote.author);
            setData('quote', selectedQuote.quote);
        } else {
            setData('author', '');
            setData('quote', '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedQuote]);

    function handleCancel() {
        setData('author', '');
        setData('quote', '');
        onCancel();
    }

    function handleEditSubmit() {
        if (selectedQuote) {
            put(`/quotes/${selectedQuote.id}`);
        } else {
            post('/quotes');
        }
        handleCancel();
    }

    function handleDelete() {
        console.log('Delete button clicked');
        if (selectedQuote) {
            destroy(`/quotes/${selectedQuote.id}`);
        }
        handleCancel();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{selectedQuote ? 'Edit Quote' : 'Create Quote'}</h1>
            <form
                className={styles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    handleEditSubmit();
                }}
            >
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
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button type="submit" disabled={processing} className={styles.button}>
                        {selectedQuote ? 'Update' : 'Create'}
                    </button>
                    <button type="button" onClick={handleCancel} className={styles.button} style={{ backgroundColor: '#666' }}>
                        Cancel
                    </button>
                    {selectedQuote && (
                        <button type="button" onClick={handleDelete} className={styles.button} style={{ backgroundColor: 'red' }}>
                            Delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
