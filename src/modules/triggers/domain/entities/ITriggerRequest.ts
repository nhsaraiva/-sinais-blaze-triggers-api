interface ITriggerRequest {
    title: string;
    sequence: string;
    message: string;
    user_id: string;
    win_colors: string;
    win_message?: string;
    loss_message?: string;
    gales?: number;
}

export default ITriggerRequest;