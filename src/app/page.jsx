import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.heroBg}>
                <div className={styles.heroTitleContainer}>
                    <h1 className={styles.heroTitle}><em>Alive</em> 88.5 KRLF</h1>
                    <h2 className={styles.heroTitle}>Christian Radio for the Palouse Region</h2>
                </div>
            </div>
            <div className={styles.homeTextContainer}>
                <article>
                    <section className={`${styles.homeText} ${styles.homeText1}`}>
                        <Image
                            src='/worship.jpg'
                            width='2222'
                            height='1472'
                            alt='hands raised with the word Jesus in the background'
                            className={styles.homeImg}
                        />          
                        <div>
                        <h3><em>You will hear music from artists such as...</em></h3>

                        <p> TobyMac, Mercy Me, NeedToBreathe, Laura Story, Natalie Grant, Chris August, Third Day, Newsboys, Kutless, Casting Crowns, Fireflight, Tenth Avenue North, Sanctus Real, Chris Tomlin, Brandon Heath.</p>                            
                        </div>              

                    </section>
                    <section className={styles.homeImgSection}>

                    </section>

                    <section className={styles.homeText}>
                        <p>We know that there is power in music and that the songs that stay with you and play over and over again in your head should be songs that give you hope and build your faith.  AND we try to provide music and programming that would appeal to the entire family.</p>
                    </section>
                    <section className={styles.homeText}>
                        <p>We are a local station run mostly by volunteers.  We do quite a bit of our own programming (check out our Programs page!), but the bulk of our music feed and live DJ talk comes from a growing Christian Adult Contemporary music network, Christian FM.  We chose Christian FM because they, like us, are "on a mission".  Our mission is to spread the good news of Jesus Christ and to help the Christians in our area grow in their spiritual walk through our choice of music and programming.  We hope that we are doing just that and we hope that you, our listeners, like the changes that we have made.  We want you to feel like this is your station and we always welcome your feedback.</p>
                    </section>
                </article>
            </div>
        </main>
    )
}
