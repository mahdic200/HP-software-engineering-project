export const isEmpty = (arg: any) : any => {
    if (arg === '') {
        return true;
    } else if (typeof arg === 'string' && arg.replace(/ /g, '').length === 0) {
        return true;
    } else if (arg === undefined || arg === null) {
        return true
    } else if (arg.length === 0) {
        return true;
    } else if (Object.entries(arg).length === 0) {
        return true;
    }
    return false;
};

export const isNotEmpty = (arg: any) => {
    return !isEmpty(arg);
};
