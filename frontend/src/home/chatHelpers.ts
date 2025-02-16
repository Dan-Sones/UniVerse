export const dateToAgoString = (timestamp: string) => {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = (now.getTime() - past.getTime()) / 1000;
    const minute = 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;

    if (diffInSeconds > minute  && diffInSeconds < hour) {
        const minutes = Math.ceil(diffInSeconds / minute)
        return `${minutes}m`
    } else if (diffInSeconds > hour && diffInSeconds < day) {
        const hours = Math.ceil(diffInSeconds / hour)
        return `${hours}h`
    }
    else if (diffInSeconds > day && diffInSeconds < week) {
        const days = Math.ceil(diffInSeconds / day)
        return `${days}d`
    }
    else {
        const weeks = Math.ceil(diffInSeconds / week)
        return `${weeks}w`
    } 
}