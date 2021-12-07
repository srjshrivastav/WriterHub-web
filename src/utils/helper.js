const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
export function getDateWithMonth(dateString) {
  const date = new Date(dateString);
  return date.getDate() + " " + months[date.getMonth()]+" "+date.getFullYear();
}
