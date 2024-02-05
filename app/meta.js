// Import the Head component from next/head
import Head from 'next/head';

const Meta = () => {
    const title = 'Emmanuel Ekpo';
    const description = 'Welcome to my portfolio website. I am a Software Engineer. Explore my projects, open-source work and contact me for any inquiries or collaborations.'
    return (
        <Head>
            <meta itemProp="name" content={title} />
            <meta
            itemProp="description"
            content={description}
            />

            <meta itemProp="name" content={title} />
            <meta
            itemProp="description"
            content={description}
            />

            {/* Reference screenshot of updated site's header in place of content */}
            {/* <meta itemProp="image" content="/assets/images/ea_logo.svg" /> */}
            <meta itemProp="image" content="/assets/images/logo_dark.png" />


            {/* Facebook Meta Tags */}
            <meta property="og:url" content="https://ossportfolio.netlify.app" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />

            {/* Reference screenshot of updated site's header in content */}
            <meta property="og:image" content="/assets/images/ea_logo.svg" />

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />

            <meta name="twitter:image" content="/assets/images/ea_logo.svg" />
        </Head>
    );
};

export default Meta;
