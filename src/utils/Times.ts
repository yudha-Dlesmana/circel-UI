import { format } from "date-format-parse";

export function formatTweetDate(isoString: string): string {
  const now = new Date();
  const postDate = new Date(isoString);

  const msDiff = now.getTime() - postDate.getTime();
  const minutesDiff = Math.floor(msDiff / (1000 * 60));
  const hoursDiff = Math.floor(msDiff / (1000 * 60 * 60));
  const dayDiff = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  const yearDiff = now.getFullYear() - postDate.getFullYear();

  const isYesterday = (() => {
    const yesterday = new Date(now);
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      postDate.getFullYear() === yesterday.getFullYear() &&
      postDate.getMonth() === yesterday.getMonth() &&
      postDate.getDate() === yesterday.getDate()
    );
  })();

  if (isYesterday) {
    return "yesterday";
  }
  if (minutesDiff < 1) {
    return "just now";
  }
  if (hoursDiff < 1) {
    return `${minutesDiff}m`;
  }
  if (dayDiff < 1) {
    return `${hoursDiff}h`;
  }

  if (dayDiff < 7) {
    return `${dayDiff}d`;
  }
  if (yearDiff < 1) {
    return format(postDate, "dd MMM");
  }

  return format(postDate, "dd MMM yyyy");
}

export function formatFullTweetDate(isoString: string) {
  const date = new Date(isoString);
  const timePart = format(date, "hh:mm A");
  const datePart = format(date, "MMM DD, YYYY");

  return `${timePart} • ${datePart}`;
}
