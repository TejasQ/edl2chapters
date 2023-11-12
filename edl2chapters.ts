import { sanitizeTimestamp } from "./sanitizeTimestamp";

export async function edl2chapters(fileContent: string) {
    const lines = fileContent.split(/\r?\n/);
    let formattedContent = '';
    let isTimestampLine = false;
    let lastTimestamp = '';

    for (const line of lines) {
        if (line.match(/^\d{3}\s+/)) { // Check if it's a timestamp line
            const timestampMatch = line.match(/\d{2}:\d{2}:\d{2}:\d{2}/);
            if (timestampMatch) {
                lastTimestamp = sanitizeTimestamp(timestampMatch[0]);
                isTimestampLine = true;
            }
        } else if (isTimestampLine) {
            const chapterMatch = line.match(/\|M:(.*?)\|/);
            if (chapterMatch) {
                const chapterName = chapterMatch[1].trim();
                formattedContent += `${lastTimestamp} - ${chapterName}\n`;
            }
            isTimestampLine = false;
        }
    }

    return formattedContent.trim();
}