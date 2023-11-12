export function sanitizeTimestamp(timestamp: string): string {
    // Split the timestamp into its components
    let [hours, minutes, seconds] = timestamp.split(':').map(part => parseInt(part, 10));

    // Adjust the hour component
    hours = hours > 0 ? hours - 1 : hours;

    // Format the timestamp
    if (hours === 0) {
        // Format as mm:ss if within the first hour
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        // Format as hh:mm:ss if after the first hour
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}