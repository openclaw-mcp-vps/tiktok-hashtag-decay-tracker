import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashDecay — Track When Hashtags Lose Effectiveness",
  description: "Monitor TikTok hashtag performance over time. Get alerts when your hashtags show declining reach and engagement so you can pivot before your content suffers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bc5a466f-ddd9-467a-8812-61b867bcca14"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
