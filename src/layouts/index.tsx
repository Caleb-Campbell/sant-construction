import Footer from "~/components/footer"
import Navbar from "~/components/navbars"


export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-sant-dark">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}