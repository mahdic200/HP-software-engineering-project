interface TodoInterface {
    id: string;
    title: string;
    state: "1" | "2", /* 1 means checked , 2 means unchecked */
    body: string;
}

export default TodoInterface;