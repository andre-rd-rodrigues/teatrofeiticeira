import moment from "moment/moment";

export const todayDay = parseInt(moment(new Date()).format("DD"));

export const today = moment().format("YYYY-MM-DD");
export const yesterday = moment().subtract(1, "days").format("YYYY-MM-DD");
