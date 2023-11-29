const subString = (arg: string | undefined, len: number): string => {
    if (arg === undefined) {
        return '- - - -';
    }
    if (arg?.length > len) {
        return arg.substring(0, len) + " ...";
    }
    return arg;
};

export default subString;