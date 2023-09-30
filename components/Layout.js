import Navigation from "./navigation.component";
import Footer from "./footer.component";

export default function Layout({ children }) {
    return (
      <>
        <Navigation />
            <main>{children}</main>
        <Footer />
      </>
    )
  }