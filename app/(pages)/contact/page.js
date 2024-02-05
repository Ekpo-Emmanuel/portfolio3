import Link from 'next/link';
import { Lock } from 'lucide-react';
import allDetails from '@/app/includes/allDetails';

export default function Contact() {
    const email = allDetails[0].email;
    const linkedln = allDetails[0].linkedln;
    const github = allDetails[0].github;
    const blog = allDetails[0].blog;
    const resume = allDetails[0].resume;
    

    return (
    <section className='contact'>
        <div className='container'>
            <div className='sec1'>
                <p>Let's build something great!</p>
                <Link href={email} target="_blank"><span>ekpoemmanuelsg@gmail.com</span></Link>
                <Link href={resume}>
                    <span>My Resume <Lock /></span>
                </Link>
            </div>
            <div className='sec2'>
                <p className='title'>Socials</p>
                <ul>
                    <Link href={linkedln} target="_blank"><span>Linkedln</span></Link>
                    <Link href={`/`} target="_blank"><span>Youtube</span></Link>
                    <Link href={github} target="_blank"><span>Github</span></Link>
                    <Link href={`/`} target="_blank"><span>Tiktok</span></Link>
                    <Link href={blog} target="_blank"><span>My Blog</span></Link>
                    <Link href={`/`} target="_blank"><span>Tiktok</span></Link>
                </ul>
            </div>
        </div>
    </section>
    )
}
