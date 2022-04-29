export default function tt_daily(props) {
    var i = 0
    let timetable = []
    //console.log(props.raw)
    var periods = props.raw.timetable.timetable.periods
    var bells = props.raw.bells
    for (var item in periods) {
        //console.log(periods[item].title)
    }
    //console.log(Object.keys(props.raw.timetable.timetable.periods).length, props.raw.timetable.timetable.periods, props.raw.timetable.timetable.periods[8])
    for (var bell_position in bells) {
        //console.log(bell_position)
        if (props.raw.timetable.timetable.periods[bells[bell_position].period] !== undefined) {
            var period_data = props.raw.timetable.timetable.periods[bells[bell_position].period]

            //Converts it from shorttitle to full title
            var period_name = period_data.title
            for (var item in props.raw.timetable.subjects) {
                if (props.raw.timetable.subjects[item].shortTitle === period_name) {
                    period_name = props.raw.timetable.subjects[item].subject
                    period_name = period_name.split(" ").slice(0, -1).join(" ") //removes the last component "YR12"
                }
            }

            timetable.push(
                <div key={bell_position}>
                    <p>{bells[bell_position].period} - {period_name} ({period_data.teacher})</p>
                </div>
            )
            //console.log(props.raw.timetable.timetable.periods[bells[bell_position].period])
        } else {
            timetable.push(
                <div key={bell_position}>
                    <p>{bells[bell_position].bellDisplay}</p>
                </div>
            )
        }
    }
    // while (props.raw.timetable.timetable.periods[i] !== undefined) {
    //     //console.log(props.raw.timetable.timetable.periods[i])
    //     timetable.push (
    //         <>
    //         <p>{props.raw.timetable.timetable.periods[i].title} - {props.raw.timetable.timetable.periods[i].teacher}</p>
    //         </>
    //     )
    //     i += 1
    // }
    return (
        <>
            {timetable}
        </>
    )
}



// LOGIC, ORGANISE TIMETABLE BY BELLS
// LOOP THROUGH BELLS, at the same time do periods[...bells[i].period] == undefined to check
// Check for variation or teacher changes then 
// Display period[...].title in array
// Display array of divs