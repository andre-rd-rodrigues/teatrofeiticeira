import moment from "moment/moment";

export const getAllEventsDates = (events) =>
  events.flatMap((event) =>
    moment(event.properties.Date.date.start).format("M-D")
  );

export const getDayEvents = (events, date) => {
  return events.filter(
    (event) =>
      moment(event.properties.Date.date.start).format("YYYY-MM-DD") === date
  );
};
