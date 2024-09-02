import { useState } from "react"
import CalculatorGpa from "./CalculatorGpa"

function YearGpa() {
    const subjectsYr1 = [
        { code: "IT1113", title: "Fundamentals of Information Technology", credit: 3 },
        { code: "IT1122", title: "Foundation of Mathematics", credit: 2 },
        { code: "IT1134", title: "Fundamentals of Programming", credit: 4 },
        { code: "IT1144", title: "Fundamentals of Web Programming", credit: 4 },
        { code: "IT1152", title: "Essentials of Statistics", credit: 2 },
        { code: "IT1214", title: "Object Oriented Design and Programming", credit: 4 },
        { code: "IT1223", title: "Database Management Systems", credit: 3 },
        { code: "IT1232", title: "Project Management", credit: 2 },
        { code: "IT1242", title: "Principles of Computer Networks", credit: 2 },
        { code: "IT1252", title: "Electronics and Device Interfacing", credit: 2 },
        { code: "IT1262", title: "Mathematics for Computing", credit: 2 }
    ]

    const subjectsYr2 = [
        { code: "IT2114", title: "Data Structures", credit: 4 },
        { code: "IT2122", title: "Software Engineering", credit: 2 },
        { code: "IT2133", title: "Advanced Web Programming", credit: 3 },
        { code: "IT2143", title: "Visual Programming", credit: 3 },
        { code: "IT2153", title: "Computer Graphics", credit: 3 },
        { code: "IT2212", title: "Management Information Systems", credit: 2 },
        { code: "IT2223", title: "Design and Analysis of Algorithms", credit: 3 },
        { code: "IT2234", title: "Web Services and Server Technologies", credit: 4 },
        { code: "IT2244", title: "Operating Systems", credit: 4 },
        { code: "IT2252", title: "Social and Professional Issues in IT", credit: 2 }
    ]


    const subjectsYr3 = [
        { code: "IT3113", title: "Knowledge Based Systems and Logic Programming", credit: 3 },
        { code: "IT3122", title: "Computer Security", credit: 2 },
        { code: "IT3133", title: "Mobile Communication and Computing", credit: 3 },
        { code: "IT3143", title: "Digital Image Processing", credit: 3 },
        { code: "IT3152", title: "Software Quality Assurance", credit: 2 },
        { code: "IT3162", title: "Group Project", credit: 2 },
        { code: "IT3213", title: "Human Computer Interaction", credit: 3 },
        { code: "IT3223", title: "Advanced Database Management Systems", credit: 3 },
        { code: "IT3232", title: "E-Commerce", credit: 2 },
        { code: "IT3243", title: "Parallel Computing", credit: 3 },
        { code: "IT3252", title: "Multimedia Computing", credit: 2 },
        { code: "IT3262", title: "Operations Research", credit: 2 }
    ]

    const [overallGpa, setOverallGpa] = useState<number>(0)
    const [totalCredits, setTotalCredits] = useState<number>(0)

    function handleGpaUpdate(gpa: number, yearCredits: number) {
        const newTotalCredits = totalCredits + yearCredits
        const newOverallGpa = ((overallGpa * totalCredits) + (gpa * yearCredits)) / newTotalCredits
        setTotalCredits(newTotalCredits)
        setOverallGpa(newOverallGpa)
    }

    return (
        <>
            <div className="mt-5 text-xl text-center">
                <h2>Overall GPA: <strong className="text-2xl">{overallGpa.toFixed(3)}</strong></h2>
            </div>

            <CalculatorGpa subjects={subjectsYr1} title="First Year GPA" onGpaCalculate={handleGpaUpdate} />
            <CalculatorGpa subjects={subjectsYr2} title="Second Year GPA" onGpaCalculate={handleGpaUpdate} />
            <CalculatorGpa subjects={subjectsYr3} title="Third Year GPA" onGpaCalculate={handleGpaUpdate} />
        </>
    )
}

export default YearGpa