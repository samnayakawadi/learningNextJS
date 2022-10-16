import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const HomeLayouter = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayouter