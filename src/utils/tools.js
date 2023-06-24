import moment from "moment/moment";

/**
 * Retrieves an array of dates from an array of events with format: M-D.
 * The events should contain a "start" date and an optional "end" date.
 * If an event has an end date, it returns an array of dates in between (inclusive of start and end dates).
 * If an event does not have an end date, it returns an array with only the start date.
 *
 * @param {Array} events - An array of objects representing events.
 * Each event object should have a "start" property (format: "YYYY-MM-DD") and an optional "end" property.
 *
 * @returns {Array} - An array of dates in between or the start dates if there's no end date.
 */
export const getAllEventsDates = (events) => {
  return events.flatMap((event) => {
    const startDate = moment(event.properties.Date.date.start, "YYYY-MM-DD");
    const endDate = moment(event.properties.Date.date?.end, "YYYY-MM-DD");

    if (endDate.isValid()) {
      const datesInRange = [];
      let currentDate = startDate.clone();

      while (currentDate.isSameOrBefore(endDate, "day")) {
        datesInRange.push(currentDate.format("M-D"));
        currentDate.add(1, "day");
      }

      return datesInRange;
    }

    return [startDate.format("M-D")];
  });
};

/**
 * Filters and retrieves events that occur within a specific date range or on a specific date.
 *
 * @param {Array} events - An array of objects representing events.
 * @param {string} date - The date (in the format "YYYY-MM-DD") to filter events for.
 *
 * @returns {Array} - An array of events that fall within the specified date range or occur on the specified date.
 */
export const getDayEvents = (events, date) => {
  return events.filter((event) => {
    const startDate = moment(event.properties.Date.date.start).format(
      "YYYY-MM-DD"
    );
    const endDate = event.properties.Date.date.end;

    if (endDate) {
      return date >= startDate && date <= endDate;
    } else {
      return date === startDate;
    }
  });
};

/**
 * Generates a random integer between a minimum and maximum value (inclusive).
 *
 * @param {number} min - The minimum value for the random number (inclusive).
 * @param {number} max - The maximum value for the random number (inclusive).
 *
 * @returns {number} - A random integer between the minimum and maximum values.
 */
export const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
