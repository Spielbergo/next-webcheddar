import Navigation from "./navigation.component";
import Footer from "./footer/footer.component";

export default function Layout({ children }) {
    return (
      <>
        <Navigation />
            <main>{children}</main>
        <Footer />
      </>
    )
  }