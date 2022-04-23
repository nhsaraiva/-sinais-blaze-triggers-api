interface ITrigger {
    id: string;
    title: string;
    sequence: string;
    message: string;
    user_id: string;
    created_at: Date;
}

export default ITrigger;