import Header from "@/layouts/_website/header";
import Footer from "@/layouts/_website/footer";

const WebsiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default WebsiteLayout;
