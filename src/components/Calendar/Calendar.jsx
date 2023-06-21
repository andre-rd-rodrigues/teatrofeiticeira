import { Badge } from "@mui/material";
import { DayCalendarSkeleton, PickersDay } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment from "moment/moment";

export default function Calendar({ isLoading, eventsDates, onChangeCalendar }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        onChange={(date) =>
          onChangeCalendar(moment(date.$d).format("YYYY-MM-DD"))
        }
        views={["day", "month"]}
        disablePast
        dayOfWeekFormatter={(day) => day.charAt(0).toUpperCase()}
        renderLoading={() => <DayCalendarSkeleton />}
        loading={isLoading}
        slots={{
          day: DynamicEventDay
        }}
        slotProps={{
          day: {
            highlightedDays: eventsDates
          }
        }}
      />
    </LocalizationProvider>
  );
}

function DynamicEventDay(props) {
  const { highlightedDays, day, outsideCurrentMonth, ...other } = props;

  const calendarDayMonth = `${day.month() + 1}-${day.date()}`;

  const hasEvent =
    !props.outsideCurrentMonth && highlightedDays.includes(calendarDayMonth);

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      invisible={!hasEvent}
      color="success"
      variant="dot"
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}
