import type { Metadata } from "next";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import LabanDictFrame from "@/components/common/laban-dict-frame";

export const metadata: Metadata = {
  title: "Toeicify",
  description: "Làm chủ kỳ thi TOEIC với Toeicify",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <LabanDictFrame />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
