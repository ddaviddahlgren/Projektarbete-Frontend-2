export default function Habit({habit}){

    return(
        <>
            <div className="habit">
                <p><strong>{habit.title}</strong></p>
                <p>Repetitions: {habit.reps}</p>
                <p>Priority: {habit.prio}</p>
            </div>
        </>
    )

}