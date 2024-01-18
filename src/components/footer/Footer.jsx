import './footer.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer>
            <div className='copyright-div'>
                <p>&#169;2023 Living Faith Fellowship</p>
                <address>Pullman, WA</address>
            </div>
            <div className='email-div'>
                <p>Questions or comments:</p>
                <Link href='mailto:krlf@krlf.org'>krlf@krlf.org</Link>
            </div>
        </footer>

    )
}

export default Footer