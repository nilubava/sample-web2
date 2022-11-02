import Layout from "@/ui/Layout";
import About from "@/ui/About";
import Skills from "@/ui/Skills";
import Contact from "@/ui/Contact";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>

      </div>
    </Layout>
  );
}
