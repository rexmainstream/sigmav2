export default function tt_daily(props) {
    var i = 0
    let timetable = []
    console.log(props.raw)
    var periods = props.raw.timetable.timetable.periods
    for (var item in periods) {
        console.log(periods[item].title)
    }
    while (i < props.raw.timetable.timetable.periods.length) {
        console.log(i)
        // var timetable_add = (
        //     <div>
        //         <p>{props.raw.timetable.timetable.periods[i]}</p>
        //     </div>
        // )
        // timetable.push(timetable_add)
        // console.log("Pushed to timetable")
        i += 1
    }
    console.log(timetable)
    return (
        <>
            jello
        </>
    )
}



// LOGIC, ORGANISE TIMETABLE BY BELLS
// LOOP THROUGH BELLS, at the same time do periods[...bells[i].period] == undefined to check
// Check for variation or teacher changes then 
// Display period[...].title in array
// Display array of divs