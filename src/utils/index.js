export const formatDate = (formatTime) => {
  let difference = new Date() - new Date(formatTime);
  difference = difference / 60000;
  let dayDiff = Math.floor(difference / 1440);
  difference -= dayDiff * 1440;
  let hourDiff = Math.floor(difference / 60);
  difference -= hourDiff * 60;
  let minuteDiff = Math.floor(difference / 1);
  difference -= minuteDiff * 1;
  let message;
  if (dayDiff > 0) {
    message = `${dayDiff} d`;
  }
  if (hourDiff > 0) {
    message = message ? `${message} ${hourDiff} h` : `${hourDiff} h`;
  }
  if (minuteDiff > 0) {
    message = message ? `${message} ${minuteDiff} min` : `${minuteDiff} min`;
  }

  return message;
};
