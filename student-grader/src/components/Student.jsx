import React from 'react'
import { useContext } from 'react'
import Score from './Score'
import StudentContext from '../context/StudentContext'


export const Student = () => {
    const studentData = useContext(StudentContext)
    console.log(studentData)
    const studentDisplay = studentData.students.map((student) => {
        return (
            <>
                <h1>{student.name}</h1>
                <h3>{student.bio}</h3>
                <Score student={student} />
            </>

        )

    })



    return (
        <div>

            {studentDisplay}
        </div>
    )
}
export default Student