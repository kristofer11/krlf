import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import { Button } from 'react-bootstrap';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.heroBg}>
                <div className={styles.heroTitleContainer}>
                    <h1 className={styles.heroTitle}>88.5 KRLF</h1>
                    <h2 className={styles.heroTitle}>Christian Radio for the Palouse Region</h2>
                    <Link className={styles.prayerButton} href='/contact/prayer-requests'>Prayer Requests</Link>
                </div>
            </div>
            <div className={styles.homeTextContainer}>
                <article>
                    <h3><em>As a Christian radio station, we believe that God answers prayer</em></h3>
                    <section className={styles.homeText}>
                        <p>During every KRLF small group we have a specified "Prayer Time" when we pray for each other, KRLF and its listeners, and the greater Palouse region. </p>
                    </section>
                    <section className={styles.homeText}>
                        <p>If you would like to submit a prayer request to the group please email us at: krlf@krlf.org with "KRLF Small Group Prayer Request" in the subject line.</p>
                    </section>
                    <section className={styles.homeText}>
                        <p>We will add any requests to our prayers at the next KRLF small group meeting.</p>
                    </section>
                </article>
            </div>
        </main>
    )
}
