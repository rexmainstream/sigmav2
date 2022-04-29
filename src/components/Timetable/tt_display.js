// Sub modules
import TT_countdown_display from './tt_countdown'
import TT_weekly from './tt_weekly'
import TT_daily from './tt_daily'

// API data (formatted)
import {daily_formatted, weekly_formatted} from "./tt_data"

export default function tt_display(props) {
    return (
        <div className='Timetable'>
            <TT_countdown_display raw={daily_formatted}/>
            <TT_daily raw={daily_formatted}/>
            <TT_weekly raw={weekly_formatted}/>
        </div>
    )
}