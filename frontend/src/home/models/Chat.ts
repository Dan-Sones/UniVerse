export type ChatMessage = {
    message: string;
    isSent: boolean;
}

export type ChatType = {
    messages: Array<ChatMessage>;
    recepient: ChatRecepient;
}

export type ChatRecepient = {
    name: string;
    profilePictureURL: string;
}