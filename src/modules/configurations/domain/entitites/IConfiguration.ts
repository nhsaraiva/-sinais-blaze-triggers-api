interface IConfiguration {
    id: string;
    user_id: string;
    telegram_channel_id: number | null;
    max_triggers: number;
}

export default IConfiguration;