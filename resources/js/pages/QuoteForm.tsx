import { EditQuoteForm } from '@/components/EditQuoteForm';
import { Modal } from '@/components/Modal';
import { Quote } from '@/lib/types';
import styles from '@css/QuoteForm.module.css';
import { router } from '@inertiajs/react';
import { JSX, useState } from 'react';

export default function QuoteForm({ quotes }: { quotes: Quote[] }): JSX.Element {
    const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRowClick = (quote: Quote) => {
        setSelectedQuote(quote);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedQuote(null);
    };

    const handleCreateNew = () => {
        setSelectedQuote(null);
        setIsModalOpen(true);
    };

    function handleLogout() {
        router.post('/logout');
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>
                    <span className={styles.q}>Q</span>
                    <span className={styles.outeMana}>uote Mana</span>
                    <span className={styles.gement}>gement</span>
                </h1>
                <div className={styles.buttonGroup}>
                    <button onClick={handleCreateNew} className={styles.createButton}>
                        <span className={styles.createNew}>Create New</span>
                    </button>
                    <button onClick={handleLogout} className={styles.logoutButton}>
                        <span className={styles.log}>Log</span>
                        <span className={styles.out}>out</span>
                    </button>
                </div>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Quote</th>
                    </tr>
                </thead>
                <tbody>
                    {quotes.map((quote) => (
                        <tr key={quote.id} onClick={() => handleRowClick(quote)} className={selectedQuote?.id === quote.id ? styles.selected : ''}>
                            <td>{quote.id}</td>
                            <td>{quote.author}</td>
                            <td>{quote.quote}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <EditQuoteForm selectedQuote={selectedQuote} onCancel={handleCloseModal} />
            </Modal>
        </div>
    );
}
