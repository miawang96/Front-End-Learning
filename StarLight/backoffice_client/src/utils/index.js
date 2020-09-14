const formatToDateTime = date => {
  const dateInfo = new Date(date);
  return `${dateInfo.getFullYear()}-${dateInfo.getMonth() +
    1}-${dateInfo.getDate()} ${dateInfo.getHours()}:${dateInfo.getMinutes()}:${dateInfo.getSeconds()}`;
};

const getEnumDisplayByValue = (enumType, value) => {
  return Object.values(enumType).find(item => item.value === value).display;
};

export { formatToDateTime, getEnumDisplayByValue };
