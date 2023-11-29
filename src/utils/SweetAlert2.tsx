import SweetAlert2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(SweetAlert2);

export const swalWarningAlert = ({success, question, alert, confirmText = "داده حذف بشه", cancelText = "نه پشیمون شدم"}: any) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn-success",
            cancelButton: "btn-danger",
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
    .fire({
        title: question,
        text: alert,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        focusCancel: true,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        reverseButtons: false,
    })
    .then((result) => {
        if (result.isConfirmed) {
            success();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            // swalWithBootstrapButtons.fire("عملیات لغو شد", "داده سر جاشه", "error");
            swalInfoAlert('! عملیات لغو شد');
        }
    });
};

export const trashConfirm = (success: any) => {
    swalWarningAlert({success: success, question: "آیا از حذف داده مطمئن هستی ؟", alert: "بعدا میتونی از سطل زباله داده رو بازیابی کنی"});
};

export const forceDeleteConfirm = (success: any) => {
    swalWarningAlert({success: success, question: "آیا از حذف داده مطمئن هستی ؟", alert: "! این عملیات بازگشتی نداره و داده برای همیشه از دست میره"});
};

export const clearTrashConfirm = (success: any) => {
    swalWarningAlert({success: success, question: "سطل زباله خالی بشه ؟", alert: "! این عملیات بازگشتی نداره و همه داده های اینجا برای همیشه پاک میشن", confirmText: "همه داده ها پاک بشن"});
};

export const removeOrderCourse = (success: any) => {
    swalWarningAlert({success: success, question: "دوره از سبد خرید حذف بشه ؟", alert: "بعدا میتونی از صفحه نمایش دوره اون رو به سبد خریدت اضافه کنی", confirmText: "بله حذف بشه"});
};

interface Options {
    confirm: () => void;
    cancel: () => void;
    question: string;
    alert?: string;
    icon?: "success" | "error" | "info" | "warning" | "question";
    confirmText?: string;
    cancelText?: string;
}

export const swalQuestion = ({ confirm, cancel, question, alert = '', icon = "warning", cancelText = 'بله', confirmText = 'خیر' }: Options) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn-success",
            cancelButton: "btn-danger",
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
    .fire({
        title: question,
        text: alert,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        focusCancel: true,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        reverseButtons: true,
    })
    .then((result) => {
        if (result.isConfirmed) {
            confirm();
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            cancel();
        }
    });
};

export const swalInfoAlert = (message: string, afterClick = () => {}, confirmText = 'باشه') => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn-success",
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
    .fire({
        title: message,
        icon: "info",
        confirmButtonText: confirmText,
        focusConfirm: false,
    })
    .then(() => {
        afterClick();
    });
};

export const freshPermissionsSwal = () => {
    swalInfoAlert('! دسترسی های شما بروزرسانی شدند', () => {
        window.location.href = window.location.href;
    })
};

export const freshUserSwal = () => {
    swalInfoAlert('! مشخصات کاربری شما بروزرسانی شد', () => {
        window.location.href = window.location.href;
    })
};