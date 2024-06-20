import Head from "next/head";
import {Prosto_One} from "next/font/google";

const prosto_one = Prosto_One({
    weight: '400',
    subsets: ['latin'],
})

export default function Home() {
    return (
        <>
            <Head>
                <title>My portfolio</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={prosto_one.className}>
                <h2>hello</h2>
            </main>
        </>
    );
}
