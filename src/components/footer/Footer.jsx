import './footer.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <Link href='/'>            
            <Image
                src='/logoNoBg.png'
                alt='KRLF Logo'
                width='1080'
                height='1080'
            /></Link>

            <div className='copyright-div'>

                <div className="copyrite-text-div">
                    <p>&#169;2023 Living Faith Fellowship</p>
                    <address>Pullman, WA</address></div>
            </div>
            <div className='email-div'>
                <p>Questions or comments:</p>
                <Link href='mailto:krlf@krlf.org'>krlf@krlf.org</Link>
            </div>
        </footer>

    )
}

export default Footer