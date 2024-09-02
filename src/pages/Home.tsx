import Footer from "../components/Footer/Footer"
import YearGpa from "../components/Gpa/YearGpa"
import NavBar from "../components/NavBar/NavBar"

function Home() {
    return (
        <>
            <NavBar />
            <div className="container mx-auto">
                <h1 className="text-4xl mt-3 mb-2 text-center">University of Vavuniya GPA Calculator</h1>
                <YearGpa/>
            </div>
            <Footer/>
        </>
    )
}

export default Home