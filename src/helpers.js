const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const createDate = (date) => {
  const Tindex = date.indexOf('T');
  const paramDate = date.slice(0, Tindex);
  const periodIndex = date.indexOf('.');
  const paramTime = date.slice(Tindex + 1, periodIndex);
  return new Date(`${paramDate} ${paramTime}`);
}

export const getDisplayDay = (date) => {
  const JSDate = createDate(date);
  const day = JSDate.getDay();
  return days[day];
}

export const getDisplayDate = (date) => {
  const JSDate = createDate(date);
  const month = months[JSDate.getMonth()];
  const dayNum = JSDate.getDate();
  const year = JSDate.getFullYear();
  const displayDate = `${month} ${dayNum}, ${year}`;
  return displayDate;
}


export const getMilitaryDisplayTime = (date) => {
  const JSDate = createDate(date);
  const hours = JSDate.getHours();
  const minutes = JSDate.getMinutes();
  const displayTime = `${hours}:${minutes}`;
  return displayTime;
}

export const getStandardDisplayTime = (date) => {
  const JSDate = createDate(date);
  let hours = JSDate.getHours();
  let meridiem = 'AM';
  if (hours > 12) {
    hours = hours - 12;
    meridiem = 'PM';
  }
  const minutes = JSDate.getMinutes();
  const displayTime = `${hours}:${minutes} ${meridiem}`;
  return displayTime;
}