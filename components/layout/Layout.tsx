import Head from "next/head";
import { FC, PropsWithChildren } from "react";



//const origin = typeof window === "undefined" ? "" : window.location.origin;

interface Props {
    title: string;
    pageDescription: string;

}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title, pageDescription }) => {
    return (
        <>
            <Head>
                <title>{title || "Grediana Rojas"}</title>
                <meta name="author" content="Grediana Rojas" />
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="paginas web" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <meta
                    property="og:title"
                    content={`Información sobre  ${title || "Grediana Rojas"}`}
                />
                <meta
                    property="og:description"
                    content={`Esta es la página  sobre  ${title || "Grediana Rojas"}`}
                />
                {/* <meta property="og:image" content={`${origin}/images/logo.png`} /> */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                />
            </Head>



            <main>{children}</main>
        </>
    );
};
