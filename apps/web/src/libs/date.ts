import { format } from "date-fns";
import { th } from "date-fns/locale";

export function formatThaiBuddhist(date: Date, withTime?: boolean) {
  const formattedDate = format(date, "PPP", { locale: th });
  const buddhistYear = date.getFullYear() + 543;
  if (withTime) {
    const formattedDateTime = format(date, "PPP p", { locale: th });
    return formattedDateTime.replace(
      date.getFullYear().toString(),
      buddhistYear.toString(),
    );
  }
  return formattedDate.replace(
    date.getFullYear().toString(),
    buddhistYear.toString(),
  );
}

export function getSemesterFromDate(date: Date) {
  const month = date.getMonth() + 1;
  if (month >= 5 && month <= 10) {
    return "1";
  } else {
    return "2";
  }
}

export function getAcademicYearFormDate(date: Date) {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  if (month < 5) {
    return year - 1 + 543;
  } else {
    return year + 543;
  }
}

export function calculateTimeLeft(target: Date) {
  const now = new Date();
  const diffMs = target.getTime() - now.getTime();
  const isLate = diffMs < 0;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return {
    isLate,
    daysLeft: days,
    hoursLeft: hours,
  };
}
