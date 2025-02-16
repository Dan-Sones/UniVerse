export type ChatMessage = {
    message: string;
    isSent: boolean;
}

export type ChatType = {
    messages: Array<ChatMessage>;
    recepient: ChatRecepient;
}

export type ChatRecepient = {
    username: string;
    profilePictureUrl: string;
}

export type ChatPreview = {
    recepient: ChatRecepient;
    recentMessage: RecentMessage
}

export type RecentMessage = {
    message: string;
    timestamp: string;
}