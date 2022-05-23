// API data (formatted)
import { daily_formatted, weekly_formatted } from "./tt_data"

export default function tt_display(props) {
    function generatePDF(divName) {
        var content = document.getElementById("timetable_today");
        var originalContents = document.body.innerHTML;

        document.body.innerHTML = printContents;
        window.print();
        document.body.innerHTML = originalContents;
    }
    return (
        <div className='timetable_print'>
            <button onClick={generatePDF("timetable_today")}>Download as PDF</button>
        </div>
    )
}
