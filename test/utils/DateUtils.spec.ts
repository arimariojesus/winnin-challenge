import { DateUtils } from '@/utils/DateUtils'; // Importe o caminho correto para a classe

describe('DateUtils', () => {
  describe('diff', () => {
    it('should calculates the difference between two dates', () => {
      const date1 = new Date('2023-08-01');
      const date2 = new Date('2023-08-10');

      const diff = DateUtils.diff(date1, date2);

      expect(diff).toBe(9 * 24 * 60 * 60 * 1000); // 9 days in milliseconds
    });
  });

  describe('getDiffTimes', () => {
    it('should calculates the difference times correctly', () => {
      const date1 = new Date('2023-08-01');
      const date2 = new Date('2023-08-02');
      const diffTimes = DateUtils.getDiffTimes(date1, date2);
      expect(diffTimes).toEqual({
        diffDays: 1,
        diffHours: 0,
        diffMinutes: 0,
        diffSeconds: 0,
      });
    });
  });

  describe('getUnitTimeDiff', () => {
    it('should generates a time ago string correctly for days', () => {
      const date1 = new Date('2023-08-01');
      let date2 = new Date('2023-08-02');

      let unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('1 dia');

      date2 = new Date('2023-08-03');

      unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('2 dias');
    });

    it('should generates a time ago string correctly for hours', () => {
      const date1 = new Date('2023-08-01T12:00:00');
      let date2 = new Date('2023-08-01T13:20:00');

      let unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('1 hora');

      date2 = new Date('2023-08-01T14:20:00');

      unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('2 horas');
    });

    it('should generates a time ago string correctly for minutes', () => {
      const date1 = new Date('2023-08-01T12:00:00');
      let date2 = new Date('2023-08-01T12:01:00');

      let unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('1 minuto');

      date2 = new Date('2023-08-01T12:15:00');

      unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('15 minutos');
    });

    it('should generates a time ago string correctly for seconds', () => {
      const date1 = new Date('2023-08-01T12:00:00');
      let date2 = new Date('2023-08-01T12:00:01');

      let unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('1 segundo');

      date2 = new Date('2023-08-01T12:00:15');

      unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('15 segundos');
    });

    it('should returns an empty string for same dates', () => {
      const date1 = new Date('2023-08-01T12:00:00');
      const date2 = new Date('2023-08-01T12:00:00');

      const unitTimeDiff = DateUtils.getUnitTimeDiff(date1, date2);

      expect(unitTimeDiff).toBe('');
    });
  });
});
