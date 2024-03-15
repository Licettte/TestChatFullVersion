export const filteredData = (data, startDate, endDate) => {
    startDate = new Date(startDate).getTime();
    endDate = new Date(endDate).getTime();
    return data.filter(d => {
        let time = new Date(d['data']).getTime();
        return (startDate <= time && time <= endDate)
    });
};
