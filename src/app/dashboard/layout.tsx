import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themeProvider";
import { Header } from "@/components/header";

export const metadata: Metadata = {
    title: "Wealth Wizard",
    description: "Você no controle das suas finanças",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    );
}
