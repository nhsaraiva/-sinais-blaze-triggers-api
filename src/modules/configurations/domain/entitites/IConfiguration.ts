interface IConfiguration {
    id: string;
    user_id: string;
    telegram_channel_id: number | null;
    max_triggers: number;
    show_placar: boolean;
}

export default IConfiguration;