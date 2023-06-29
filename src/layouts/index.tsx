import Navbar from "~/components/navbars"


export const Layout = ({children}:{children: React.ReactNode}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    )
}