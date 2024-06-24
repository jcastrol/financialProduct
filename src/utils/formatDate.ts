export const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
  };

 export const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son base 0
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  export const addOneYear = (date: Date): Date => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + 1);
    return newDate;
  };
  
  export const addOneYearAndFormat = (date: Date): string => {
    const newDate = addOneYear(date);
    return formatDate(newDate);
  };

  export const formatToISO = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses son base 0
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
  };

  export const convertDateFormat = (dateString: string): string => {
    const date = parseDate(dateString);
    return formatToISO(date);
  };

  export const convertISOFormat = (dateString: string): string => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };