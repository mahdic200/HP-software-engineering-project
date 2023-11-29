import { z } from "zod";

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_string) {
        if (issue.validation == "email") {
            return { message: "لطفا یک ایمیل معتبر وارد کنید !" };
        }
    }
    if (issue.code === z.ZodIssueCode.invalid_type) {
        if (issue.expected === "string") {
            return { message: "لطفا رشته وارد کنید !" };
        } else if (issue.expected === "number") {
            return { message: "لطفا عدد وارد کنید !" };
        }
    }
    if (issue.code === z.ZodIssueCode.too_small) {
        if (issue.type === "string") {
            return { message: `حد اقل ${issue.minimum} کاراکتر وارد کنید !` };
        } else if (issue.type === "number") {
            return { message: `حداقل مقدار برای این فیلد ${issue.minimum} است !` };
        }
    }
    if (issue.code === z.ZodIssueCode.too_big) {
        if (issue.type === "string") {
            return { message: `حداکثر ${issue.maximum} کاراکتر وارد کنید !` };
        } else if (issue.type === "number") {
            return { message: `حداکثر مقدار برای این فیلد ${issue.maximum} است !` };
        }
    }
    if (issue.code === z.ZodIssueCode.custom) {
        return { message: `less-than-${(issue.params || {}).minimum}` };
    }
    return { message: ctx.defaultError };
};

const applyCustomErrorMap = () => {
    z.setErrorMap(customErrorMap);
}
export default applyCustomErrorMap;



// const schema = z.object({
//     email: string().email(),
//     title: string().nonempty().max(5),
//     website: string().url().optional(),
//     city: string(),
//     id: z.never()
// });

// const { register, handleSubmit, formState } = useForm({
//     resolver: zodResolver(schema),
// });


// const { errors } = formState;

// (errors.email as any)?.message