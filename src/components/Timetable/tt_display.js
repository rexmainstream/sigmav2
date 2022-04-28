import tt_countdown from "./tt_countdown"
import tt_weekly from "./tt_weekly"
import tt_daily from "./tt_daily"

export default function tt_display(props) {
    return (
        <>
            <tt_countdown />
            <tt_daily />
            <tt_weekly />
        </>
    )
}