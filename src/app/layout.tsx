import "./globals.css"; // Import global CSS
import Header from "./components/Header"; // Import Header component

export const metadata = {
  title: "My Chat App",
  description: "A chat app built using Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 h-screen overflow-hidden">
        {/* Full-height layout with fixed header */}
        <div className="flex flex-col h-full">
          <Header /> {/* Fixed header */}
          <main className="flex-grow overflow-hidden">
            {/* Main content area with flexible height */}
            <div className="flex h-full">
              {/* Flex container for sidebar and main content */}
              <div className="flex-1 max-w-7xl mx-auto p-6">
                {" "}
                {/* Centered container */}
                {children} {/* This will render your page content */}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
