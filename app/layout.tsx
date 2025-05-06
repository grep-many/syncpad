import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Provider } from "./Provider";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "SyncPad",
    description:
        "A collaborative text editor that leverages Liveblocks and Lexical to offer a real-time, feature-rich platform for creating, editing, and sharing documents.",
    manifest: "/manifest.json"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                baseTheme: dark,
                variables: { colorPrimary: "#3371FF", fontSize: "16px" },
            }}
        >
            <html lang="en">
                <head>
                    <link rel="icon" href="/favicon-32x32.png" />
                </head>
                <body
                    className={cn(
                        "min-h-screen font-sans antialiased",
                        fontSans.variable
                    )}
                >
                    <Provider>{children}</Provider>
                </body>
            </html>
        </ClerkProvider>
    );
}
