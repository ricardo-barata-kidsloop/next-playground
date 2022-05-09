import Layout from 'components/Layout/Layout';
import { allDocs, Doc } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Head from 'next/head';
import { ReactElement } from 'react';

export async function getStaticPaths() {
    const paths: string[] = allDocs.map((doc) => doc.url);
    return {
        paths,
        fallback: false,
    };
}

interface Props {
    doc: Doc;
}

export async function getStaticProps({ params }) {
    const doc: Doc = allDocs.find(
        (doc) => doc._raw.flattenedPath === params.slug
    );
    return {
        props: {
            doc,
        },
    };
}

export default function DocLayout({ doc }: { doc: Doc }) {
    return (
        <>
            <Head>
                <title>{doc.title}</title>
            </Head>
            <article>
                <div>
                    <time dateTime={doc.date}>
                        {format(parseISO(doc.date), 'LLLL d, yyyy')}
                    </time>
                    <h1>{doc.title}</h1>
                </div>
                <div dangerouslySetInnerHTML={{ __html: doc.body.html }} />
            </article>
        </>
    );
}

DocLayout.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
};
