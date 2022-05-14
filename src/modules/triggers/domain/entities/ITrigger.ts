interface ITrigger {
    id: string;
    title: string;
    sequence: string;
    message: string;
    user_id: string;
    win_colors: string;
    win_message: string | null;
    loss_message: string | null;
    gales: number | null;
    created_at: Date;
}

export default ITrigger;