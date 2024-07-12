import Footer from "../Footer";
import Header from "../Header";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex flex-1">{children}</main>
      <Footer />
    </div>
  );
}
