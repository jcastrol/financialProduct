import {
  parseDate,
  formatDate,
  addOneYear,
  addOneYearAndFormat,
  formatToISO,
  convertDateFormat,
  convertISOFormat,
} from '../../src/utils/formatDate'; // Ajusta la ruta según la estructura de tu proyecto

describe('Date Utility Functions', () => {
  describe('parseDate', () => {
    it('parses date string in "dd/mm/yyyy" format correctly', () => {
      const dateString = '25/06/2024';
      const expectedDate = new Date(2024, 5, 25); // Meses en JavaScript son base 0

      expect(parseDate(dateString)).toEqual(expectedDate);
    });

    it('handles invalid date strings gracefully', () => {
      const dateString = '31d/02/2024'; // Fecha inválida (31 de febrero)
      const expectedDate = new Date(NaN); // NaN en caso de error de fecha
      const invalidDateString = parseDate(dateString)
      expect(invalidDateString.toString()).toEqual(expectedDate.toString());
    });
  });

  describe('formatDate', () => {
    it('formats a Date object to "dd/mm/yyyy" format', () => {
      const date = new Date(2024, 5, 25); // 25 de junio de 2024
      const expectedDateString = '25/06/2024';

      expect(formatDate(date)).toEqual(expectedDateString);
    });
  });

  describe('addOneYear', () => {
    it('adds one year to a Date object', () => {
      const date = new Date(2024, 5, 25); // 25 de junio de 2024
      const expectedDate = new Date(2025, 5, 25); // 25 de junio de 2025

      expect(addOneYear(date)).toEqual(expectedDate);
    });
  });

  describe('addOneYearAndFormat', () => {
    it('adds one year to a Date object and formats it to "dd/mm/yyyy" format', () => {
      const date = new Date(2024, 5, 25); // 25 de junio de 2024
      const expectedDateString = '25/06/2025';

      expect(addOneYearAndFormat(date)).toEqual(expectedDateString);
    });
  });

  describe('formatToISO', () => {
    it('formats a Date object to ISO "yyyy-mm-dd" format', () => {
      const date = new Date(2024, 5, 25); // 25 de junio de 2024
      const expectedISOString = '2024-06-25';

      expect(formatToISO(date)).toEqual(expectedISOString);
    });
  });

  describe('convertDateFormat', () => {
    it('converts date string from "dd/mm/yyyy" format to ISO "yyyy-mm-dd" format', () => {
      const dateString = '25/06/2024';
      const expectedISOString = '2024-06-25';

      expect(convertDateFormat(dateString)).toEqual(expectedISOString);
    });
  });

  describe('convertISOFormat', () => {
    it('converts date string from ISO "yyyy-mm-dd" format to "dd/mm/yyyy" format', () => {
      const dateString = '2024-06-25';
      const expectedFormattedString = '25/06/2024';

      expect(convertISOFormat(dateString)).toEqual(expectedFormattedString);
    });
  });
});