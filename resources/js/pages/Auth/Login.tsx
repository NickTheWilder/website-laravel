import styles from '@css/auth.module.css';
import { useForm } from '@inertiajs/react';
import { FormEvent, JSX } from 'react';

export default function Login(): JSX.Element {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        post('/login');
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
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
                            autoComplete="current-password"
                            required
                        />
                        {errors.password && <span className={styles.error}>{errors.password}</span>}
                    </div>
                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                                className={styles.checkbox}
                            />
                            Remember me
                        </label>
                    </div>
                    <div className={styles.buttonGroup}>
                        <button type="submit" disabled={processing} className={styles.button}>
                            Login
                        </button>
                    </div>
                </form>
                <div className={styles.links}>
                    <a href="/register" className={styles.link}>
                        Don't have an account? Register
                    </a>
                </div>
            </div>
        </div>
    );
}
