
import Head from "next/head";
import Hero from "../Components/hero";


export default function Home() {
    return (
        <>
            <Head>
                <title>Shamima Akter</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />                
            </Head>
            
            

            <div className="flex items-center justify-center">
                <Hero />
             </div>
        </>
    );
}
