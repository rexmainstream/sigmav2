export default function tt_weekly2(props) {
    // Variable establishing
    var day = 1
    var timetable = []
    var day_timetable = []
    var period_header_table = []
    var period_timetable = []
    var period_rows = []
    // Sorting the raw into days
    while (day <= (Object.keys(props.raw.days).length)) {

        // Display the headers of each day e.g "Mon"
        period_header_table.push(
            <td className="period_cycle_day" key={`name-${props.raw.days[day].dayname.slice(0, -1)}`}>
                {props.raw.days[day].dayname.slice(0, -1)}
            </td>
        )
        // Checking which periods are on
        var periods_list = props.raw.days[day].routine.split(",")
        for (var period_index in periods_list) { // Sorts through the days
            if (Number.isInteger(parseInt(periods_list[period_index])) === true) {
                var key_value = periods_list[period_index] + "-" + day
                if (period_rows[period_index] === undefined) {
                    period_rows[period_index] = []
                }
                if (props.raw.days[day].periods[periods_list[period_index]] === undefined) { // If the period is a free or a break
                    period_timetable.push(
                        <tr className="period_cycle_empty" key={`${props.raw.days[day].dayname}${key_value}`}>
                            <td className="period_number">
                                {periods_list[period_index]}
                            </td>
                            <td className="period_description">
                            </td>
                        </tr>
                    )
                    period_rows[period_index].push(
                        <td className="period_cycle_empty" key={`${props.raw.days[day].dayname}${key_value}`}>
                            <a className="period_number">
                                {periods_list[period_index]}
                            </a>
                            <a className="period_description">
                            </a>
                        </td>
                    )
                } else { // If the period has a class, then displays class details
                    var period_name = props.raw.days[day].periods[periods_list[period_index]].title.split(" ")[0]
                    if (props.raw.days[day].periods[periods_list[period_index]].room === null) {
                        period_name = ""
                    }
                    period_timetable.push(
                        <tr className="period_cycle_class" key={`${props.raw.days[day].dayname}${key_value}`}>
                            <td className="period_cycle_number">
                                {periods_list[period_index]}
                            </td>
                            <td className="period_cycle_description">
                                {period_name}
                            </td>
                        </tr>
                    )
                    period_rows[period_index].push(
                        <td className="period_cycle_class" key={`${props.raw.days[day].dayname}${key_value}`}>
                            <a className="period_cycle_number">
                                {periods_list[period_index]}
                            </a>
                            <a className="period_cycle_description">
                                {period_name}
                            </a>
                        </td>
                    )
                }
            }
            //console.log(periods_list[period_index])
        }
        // The list containing today's periods are pushed to the week of days
        // This requires a seperate module because we need to nest it inside a div for CSS formatting
        day_timetable.push(
            <td className="day" key={props.raw.days[day].dayname}>
                {period_timetable}
            </td>
        )
        period_timetable = []
        // The list containing the week's day is pushed to the list of weekss
        if (props.raw.days[day].dayname.slice(0, -1) === "Fri") {
            timetable.push(
                <table className="week" key={props.raw.days[day].dayname.slice(-1)}>
                    <tbody>
                        <tr>
                            {period_header_table}
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            {day_timetable}
                        </tr>
                    </tbody>
                </table>
            )
            period_header_table = []
            day_timetable = []
        }
        day += 1
    }
    // var period_count
    // var row_count
    // var formatted_timetable = []
    // var temporary_timetable = []
    // console.log(period_rows)
    // while (count < period_rows.length) {
    //     console.log(period_rows[count])
    //     count += 1
    // }
    // for (period_count in period_rows) { //grabs the period counts
    //     //grab each period from the lists
    //     //grab [1] and make them into another lsit
    //     //push those lists into the timetable
    //     count += 1
    //     temporary_timetable.push(
    //         period_rows[period_count]
    //     )
    //     if (count = 5) {
    //         formatted_timetable.push(
    //             <tr>
    //                 {temporary_timetable}
    //             </tr>
    //         )
    //         count = 0
    //         temporary_timetable = []
    //     }
    //     //console.log(period_rows[period_count])
    // }
    // var formatted_timetable = []
    // var temporary_timetable = []
    // var count2
    // var count_split = 0
    // var count
    // //period rows has all that aligns to blah
    // for (count in period_rows) {
    //     for (count2 in period_rows[count]) {
    //         count_split += 1
    //         temporary_timetable.push(
    //             period_rows[count][count2]
    //         )
    //         if (count_split = 5) {
    //             formatted_timetable.push(
    //                 <tr className={count_split}>
    //                     {temporary_timetable}
    //                 </tr>
    //             )
    //             temporary_timetable = []
    //             count_split = 0
    //         }
    //     }
    //}
    /* Display formatted
    1. For each list in array
    <table><tbody>{formatted_timetable}</tbody></table>
    */





    return (
        <div className="timetable_cycle" id="timetable_cycle">
            <tbody>{timetable}</tbody>
        </div>
    )
}