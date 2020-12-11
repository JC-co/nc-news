export const convertDate = (postTime) => {
  const date = `${postTime.slice(8, 10)}-${postTime.slice(
    5,
    7
  )}-${postTime.slice(0, 4)}`;
  const time = `${postTime.slice(11, 16)}`;
  return `${time} on ${date}`;
};
