export function timeStamps(realtimeDataUpdatedAt) {

    const iso8601 = realtimeDataUpdatedAt
        .replace(' ', 'T')
        .replace(/(\.\d{3})\d+/, '$1')
        + 'Z';

    const dateField = new Date(iso8601);

    const date = dateField.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
    });
    const time = dateField.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    return {
        date,
        time
    };    

};