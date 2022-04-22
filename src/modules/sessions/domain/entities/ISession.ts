interface ISession {
    token: string;
    user: {
        id: string,
        email: string,
    }
}

export default ISession;