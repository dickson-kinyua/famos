import Header from "@/ui/Header";

export const metadata = {
  title: "Famos Engineering",
  description:
    "We specialize in all kinds of construction and renovation work, including residential, commercial, and industrial projects. Our team of experienced professionals is dedicated to delivering high-quality results that exceed our clients' expectations.",
};

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {children}
    </div>
  );
}
