import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ApolloWrapper } from "@/libs/apollo/apollo-provider";
import "@/styles/globals.scss";
import { poppins, tiro } from "@/utils/GlobalFonts";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} ${poppins.variable} ${tiro.variable}`}
    >
      <body className={`min-h-dvh ${poppins.className}`}>
        <Header />
        <ApolloWrapper>
          <main>{children}</main>
        </ApolloWrapper>
        <GoogleAnalytics id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "",
    "https://nesarahmed.dev"
  ),
  type: "website",
  title: {
    default: "Nesar Ahmed",
    template: "%s | Nesar Ahmed"
  },

  alternates: {
    canonical: "/"
  }
};
