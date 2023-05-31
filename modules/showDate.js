function showTime() {
  function getOrdinalSuffix(day) {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = (day % 100 < 20) ? day % 100 : day % 10;
    const suffix = suffixes[(relevantDigits - 1) % 10] || suffixes[0];
    return day + suffix;
  }

  return () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const ordinalDay = getOrdinalSuffix(day);

    const timeZoneDetect = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formattedDate = currentDate.toLocaleString('en-US', {
      timeZone: timeZoneDetect,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });

    const modifiedFormattedDate = formattedDate.replace(' at', ',');
    const modifiedFormattedDateWithoutComma = modifiedFormattedDate.replace(',', '');

    return modifiedFormattedDateWithoutComma.replace(day, ordinalDay);
  };
}

export default showTime;
