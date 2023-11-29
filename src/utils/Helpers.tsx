import moment from "jalali-moment";
import { isEmpty, isNotEmpty } from "./Empty";
import { getLocalItem, setLocalItem } from "./LocalStorage";

export const isNumeric = (arg: any) => {
    return !isNaN(arg);
};

export const getAllIds = (itemsObject: any) => {
    let ids: (string | number)[] = [];
    Object.values(itemsObject).map((item: any) => {
        ids.push(item.id + '');
    });
    return ids;
};

export const persianDate = (arg: string, format: string = "dddd D MMMM YYYY , H:mm:ss a") => {
    if (!arg) {
        return "- - - -";
    }
    return moment(arg).locale('fa').format(format)
};

export const numberFormat = (arg: number, unit: string = 'تومان') => {
    if (arg === undefined) {
        return '- - - -';
    }
    let formatted = new Intl.NumberFormat('fa-IR').format(arg);
    return formatted + (isNotEmpty(unit) ? " " + unit : '');
};

export const setDocTitle = (arg: string = '') => {
    const siteName = "جعبه ابزار";
    if (isEmpty(arg)) {
        document.title = siteName;
    }
    document.title = arg + " | " + siteName;
}

export const setTheme = (theme: string) => {
    setLocalItem('theme', theme)
};

export const getTheme = () => {
    let theme = getLocalItem('theme');
    if (theme == undefined || !["dark", "light"].includes(theme)) {
        setTheme("dark")
        return "dark";
    }
    return theme;
};

export const isThemeDark = () => {
    return getTheme() == "dark";
}

export const isThemeLight = () => {
    return getTheme() == "light";
}

export const changeTheme = (currentTheme: string = getTheme()) => {
    currentTheme == "dark" ? setTheme("light") : setTheme("dark");
    let newTheme = currentTheme == "dark" ? "light" : "dark";
    return newTheme;
};

export const clearLocalStorage = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('userPermissions')
    localStorage.removeItem('expire_time')
    localStorage.removeItem('token')
}


export function dateDiffForHumans(unixTime: string | number) {
    if (typeof unixTime === 'string') {
        unixTime = ((new Date(unixTime)).getTime() as number);
    }
    var d = new Date();
    var diff = Math.abs(d.getTime() - unixTime);
    var intervals: any = {
        y: diff / (365 * 24 * 60 * 60 * 1 * 1000),
        m: diff / (30.5 * 24 * 60 * 60 * 1 * 1000),
        d: diff / (24 * 60 * 60 * 1 * 1000),
        h: diff / (60 * 60 * 1 * 1000),
        i: diff / (60 * 1 * 1000),
        s: diff / (1 * 1000),
    }

    Object.keys(intervals).map(function (value, _index) {
        return intervals[value] = Math.floor(intervals[value]);
    })

    var unit;
    var count;

    switch (true) {
        case intervals.y > 0:
            count = intervals.y;
            unit = 'سال';
            break;
        case intervals.m > 0:
            count = intervals.m;
            unit = 'ماه';
            break;
        case intervals.d > 0:
            count = intervals.d;
            unit = 'روز';
            break;
        case intervals.h > 0:
            count = intervals.h;
            unit = 'ساعت';
            break;
        case intervals.i > 0:
            count = intervals.i;
            unit = 'دقیقه';
            break;
        default:
            count = intervals.s;
            unit = 'ثانیه';
            break;

    }

    if (count === 0) {
        return 'الان';
    }

    return (count as number).toLocaleString('fa') + ' ' + unit + ((unixTime > d.getTime()) ? ' بعد' : ' پیش');
}

export function dateDiffForHumans2(date: number | string) {
    // if (typeof date === 'number') {
    //     date = new Date();
    // }
    let olderDate: number = new Date(date).getTime();
    const currentDate = new Date().getTime();

    const diff = olderDate - currentDate;

    const formatter = new Intl.RelativeTimeFormat('fa', { numeric: 'auto' });

    return formatter.format(Math.round(diff / 86400000), 'day');
}