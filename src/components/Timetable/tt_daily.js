export default function tt_daily(props) {
    // Timetable to be stored and variable
    let timetable = []
    var bells = props.raw.bells

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
            var teacher = ""
            if ((period_data.fullTeacher !== undefined) && (period_data.fullTeacher !== "")) {
                teacher = "(" + period_data.fullTeacher + ")"
            }
            timetable.push(
                <div key={bell_position} className="period_class">
                    <p>{bells[bell_position].period} - {period_name} {teacher}</p>
                </div>
            )
            //console.log(props.raw.timetable.timetable.periods[bells[bell_position].period])
        } else {
            timetable.push(
                <div key={bell_position} className="period_break">
                    <p>{bells[bell_position].bellDisplay}</p>
                </div>
            )
        }
    }
    return (
        <div className="timetable_today">
            {timetable}
        </div>
    )
}

/*
LOGIC, ORGANISE TIMETABLE BY BELLS
LOOP THROUGH BELLS, at the same time do periods[...bells[i].period] == undefined to check
Check for variation or teacher changes then 
Display period[...].title in array
Display array of divs
*/