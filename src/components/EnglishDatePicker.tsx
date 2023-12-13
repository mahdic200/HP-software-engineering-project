import DatePicker from "react-multi-date-picker"
import gregorian from "react-date-object/calendars/gregorian"
import gregorian_en from "react-date-object/locales/gregorian_en"
interface Props {
    name: string;
    defaultValue?: string | Date;
    setValue: (...args: any) => void;
}

function EnglishDatePicker({ name, setValue, defaultValue = new Date() }: Props) {
    return (
        <>
            <DatePicker
            style={{ width: '400px' }}
            format="dddd DD MMMM YYYY"
            calendar={gregorian}
            locale={gregorian_en}
            value={new Date(defaultValue)}
            onChange={(date: any) => {
                setValue(name, date.toDate().getTime())
            }}
            calendarPosition="bottom-right"
            />
        </>
    );
}

export default EnglishDatePicker;
