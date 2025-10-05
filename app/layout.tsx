import type {Metadata} from "next";
import '@fontsource/mclaren';
import '@fontsource/luckiest-guy';
import "@/styles/_global.scss";
import {ReactNode} from "react";

export const metadata: Metadata = {
  title: "ValleyDAO Hempy",
  description: "This website was created for ValleyDAO Hempy Hoodie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
