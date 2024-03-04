export const formatTime = (formatTime) => {
  let difference = new Date() - new Date(formatTime);
  difference = difference / 60000;
  let dayDiff = Math.floor(difference / 1440);
  difference -= dayDiff * 1440;
  let hourDiff = Math.floor(difference / 60);
  difference -= hourDiff * 60;
  let minuteDiff = Math.floor(difference / 1);
  console.log(minuteDiff);
  difference -= minuteDiff * 1;
};
