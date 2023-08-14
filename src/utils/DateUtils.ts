export class DateUtils {
  static diff(date1: Date | number, date2: Date | number) {
    const dateA = new Date(date1).getTime();
    const dateB = new Date(date2).getTime();

    return Math.abs(dateA - dateB);
  }

  static getDiffTimes(date1: Date | number, date2: Date | number) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const diffTime = this.diff(date1, date2);

    const diffDays = Math.floor(diffTime / day);
    const diffHours = Math.floor((diffTime % day) / hour);
    const diffMinutes = Math.floor(((diffTime % day) % hour) / minute);
    const diffSeconds = Math.floor((((diffTime % day) % hour) % minute) / second);

    return {
      diffDays,
      diffHours,
      diffMinutes,
      diffSeconds,
    };
  }

  static getUnitTimeDiff(lastDate: Date | number, currentDate: Date | number) {
    const { diffDays, diffHours, diffMinutes, diffSeconds } = this.getDiffTimes(lastDate, currentDate);

    if (diffDays > 0) {
      return `${diffDays} ${diffDays > 1 ? 'dias' : 'dia'}`;
    }

    if (diffHours > 0) {
      return `${diffHours} h`;
    }

    if (diffMinutes > 0) {
      return `${diffMinutes} min`;
    }

    if (diffSeconds > 0) {
      return `${diffSeconds} seg`;
    }

    return '';
  }
}
