import Link from 'next/link';
import { ArrowUpRight, Lock } from 'lucide-react';
import allDetails from '@/app/includes/allDetails';

export default function Contact() {
    const email = allDetails[0].email;
    const linkedln = allDetails[0].linkedln;
    const github = allDetails[0].github;
    const blog = allDetails[0].blog;
    const resume = allDetails[0].resume;
    
    const links = [
        {
            'title': 'Linkedln',
            'url': linkedln,
            'active': 'yes'
        },
        {
            'title': 'Github',
            'url': github,
            'active': 'yes'
        },
        // {
        //     'title': 'Resume',
        //     'url': resume,
        //     'active': 'yes'
        // },
        {
            'title': 'Blog',
            'url': blog,
            'active': 'yes'
        },
        {
            'title': 'Youtube',
            'url': blog,
            'active': 'no'
        },
        {
            'title': 'Tiktok',
            'url': blog,
            'active': 'no'
        },
        {
            'title': 'Instagram',
            'url': blog,
            'active': 'no'
        },
    ]

    return (
    <section className='contact'>
        <div className='container'>
            <div className='sec1'>
                <p>Let's build something great!</p>
                <Link href={email} target="_blank"><span>ekpoemmanuelsg@gmail.com</span></Link>
                {/* <Link href={resume}>
                    <span>My Resume <Lock /></span>
                </Link> */}
            </div>
            <div className='sec2'>
                <ul>
                    {links.map((link) => (
                      link.active === 'yes' ? (
                        <Link 
                            href={link.url} 
                            key={link.title} target="_blank"
                        >
                                <span>{link.title} <ArrowUpRight /></span>
                        </Link>
                      ) : null
                    ))}
                </ul>
            </div>
        </div>
    </section>
    )
}
