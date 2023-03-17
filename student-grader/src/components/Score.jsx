import React from 'react'

export const Score = ({ student }) => {

    const studentScore = student.scores.map((score) => {
        return (
            <>
                <h4>{score.date}</h4>
                <h4>{score.score}</h4>

            </>

        )

    })



    return (
        <div>{studentScore}</div>
    )
}
export default Score
