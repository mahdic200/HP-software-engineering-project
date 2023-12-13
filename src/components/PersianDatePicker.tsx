import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
interface Props {
    name: string;
    defaultValue?: string | Date;
    setValue: (...args: any) => void;
}

function PersianDatePicker({ name, setValue, defaultValue = new Date() }: Props) {
    return (
        <>
            <DatePicker
            style={{ width: '400px' }}
            format="dddd DD MMMM YYYY"
            calendar={persian}
            locale={persian_fa}
            value={new Date(defaultValue)}
            onChange={(date: any) => {
                setValue(name, date.toDate().getTime())
            }}
            calendarPosition="bottom-right"
            />
        </>
    );
}

export default PersianDatePicker;
