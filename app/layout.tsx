import '@/styles/_global.scss';
import '@fontsource/luckiest-guy';
import '@fontsource/mclaren';
import type { Metadata } from 'next';
import Image from 'next/image';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'ValleyDAO Hempy',
    description: 'This website was created for ValleyDAO Hempy Hoodie',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Image
                    src="/img/background.png"
                    alt="page background"
                    fill
                    objectFit="cover"
                    className="page-background"
                />
                <Image
                    src="/img/background-mobile.png"
                    alt="page background"
                    fill
                    objectFit="cover"
                    className="page-background-mobile"
                />
                {children}
            </body>
        </html>
    );
}
