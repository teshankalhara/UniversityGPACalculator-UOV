import { useState } from "react"

function CalculatorGpa({ subjects, title, onGpaCalculate }: { subjects: Array<{ code: string, title: string, credit: number }>, title: string, onGpaCalculate: (gpa: number, totalCredits: number) => void }) {
    const grades = [
        { grade: "A+ or A", value: 4.00 },
        { grade: "A-", value: 3.70 },
        { grade: "B+", value: 3.30 },
        { grade: "B", value: 3.00 },
        { grade: "B-", value: 2.70 },
        { grade: "C+", value: 2.30 },
        { grade: "C", value: 2.00 },
        { grade: "C-", value: 1.70 },
        { grade: "D+", value: 1.30 },
        { grade: "D", value: 1.00 },
        { grade: "E", value: 0.00 }
    ]

    const [selectedGrades, setSelectedGrades] = useState<number[]>(Array(subjects.length).fill(null))
    const [gpa, setGpa] = useState<number>(0)

    function handleGradeChange(index: number, gradeValue: number) {
        const updatedGrades = [...selectedGrades]
        updatedGrades[index] = gradeValue
        setSelectedGrades(updatedGrades)
    }

    function calculateGpa() {
        let totalCredits = 0
        let totalPoints = 0

        subjects.forEach((course, index) => {
            const gradeValue = selectedGrades[index]
            totalCredits += course.credit
            if (gradeValue !== null) {
                totalPoints += gradeValue * course.credit
            }
        });

        if (totalCredits > 0) {
            const calculatedGpa = totalPoints / totalCredits
            setGpa(calculatedGpa);
            onGpaCalculate(calculatedGpa, totalCredits)
        } else {
            setGpa(0);
            onGpaCalculate(0, totalCredits)
        }
    }

    return (
        <>
            <h1>{title}</h1>
            <table className="border-collapse border border-slate-700 bg-slate-200 w-[1000px] mb-3">
                <thead>
                    <tr>
                        <th className="border border-slate-700 w-[150px]">Course Code</th>
                        <th className="border border-slate-700 w-[350px]">Course Title</th>
                        <th className="border border-slate-700 w-[75px]">Credits</th>
                        <th className="border border-slate-700 w-[75px]">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((course, index) => (
                        <tr key={index}>
                            <td className="border border-slate-700 text-center">{course.code}</td>
                            <td className="border border-slate-700 text-left">{course.title}</td>
                            <td className="border border-slate-700 text-center">{course.credit}</td>
                            <td className="border border-slate-700 text-center">
                                <select className="bg-slate-200" value={selectedGrades[index] ?? ""}
                                    onChange={(e) => handleGradeChange(index, parseFloat(e.target.value))}>
                                    <option value="">Select Grade</option>
                                    {grades.map((grade) => (
                                        <option key={grade.grade} className="text-left" value={grade.value}>
                                            {grade.grade}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={4} className="border border-slate-700 text-right">
                            <button onClick={calculateGpa} type="button" className="py-2 my-2 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-700 text-sm mx-3">Calculate GPA</button>
                            <span className="mx-4">{title} GPA: <strong>{gpa.toFixed(3)}</strong></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default CalculatorGpa