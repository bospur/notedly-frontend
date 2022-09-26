export const convertDate = (dateString) => {
    const months = [
        'янв',
        'фев',
        'мар',
        'апр',
        'май',
        'июн',
        'июл',
        'авг',
        'сен',
        'окт',
        'ноя',
        'дек'
    ];
    const date = new Date(Number(dateString))
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const nowDate = new Date(Date.now());
    const nowYear = nowDate.getFullYear();

    const string = `${day} ${months[month]} ${ year === nowYear ? `в ${hours}:${minutes}`: year}`;

    return string;
}