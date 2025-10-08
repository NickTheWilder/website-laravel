import styles from '@css/auth.module.css';
import { useForm } from '@inertiajs/react';
import { FormEvent, JSX } from 'react';

export default function Register(): JSX.Element {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post('/register');
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Register</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.fieldGroup}>
                        <label htmlFor="name" className={styles.label}>
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            className={styles.input}
                            autoComplete="name"
                            required
                        />
                        {errors.name && <span className={styles.error}>{errors.name}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className={styles.input}
                            autoComplete="email"
                            required
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className={styles.input}
                            autoComplete="new-password"
                            required
                        />
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>

                    <div className={styles.fieldGroup}>
                        <label htmlFor="password_confirmation" className={styles.label}>
                            Confirm Password:
                        </label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            className={styles.input}
                            autoComplete="new-password"
                            required
                        />
                        {errors.password_confirmation && <span className={styles.error}>{errors.password_confirmation}</span>}
                    </div>

                    <div className={styles.buttonGroup}>
                        <button type="submit" disabled={processing} className={styles.button}>
                            Register
                        </button>
                    </div>
                </form>

                <div className={styles.links}>
                    <a href="/login" className={styles.link}>
                        Already have an account? Login
                    </a>
                </div>
            </div>
        </div>
    );
}
