import { TimeZoneRequest } from "./TimeZoneRequest";

export declare type EmptyObject = Record<string, never>;

export declare type EmptyArray = Array<string>;

export declare type StringArrayRequest = Array<string>;

export type DateRequest = {
    start: string;
    end?: string | null;
    time_zone?: TimeZoneRequest | null;
};
export type RichTextItemRequest = {
    text: {
        content: string;
        link?: {
            url: string;
        } | null;
    };
    type?: "text";
    annotations?: {
        bold?: boolean;
        italic?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        code?: boolean;
        color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";
    };
} | {
    mention: {
        user: {
            id: string;
        } | {
            person: {
                email?: string;
            };
            id: string;
            type?: "person";
            name?: string | null;
            avatar_url?: string | null;
            object?: "user";
        } | {
            bot: EmptyObject | {
                owner: {
                    type: "user";
                    user: {
                        type: "person";
                        person: {
                            email: string;
                        };
                        name: string | null;
                        avatar_url: string | null;
                        id: string;
                        object: "user";
                    } | {
                        id: string;
                        object: "user";
                    };
                } | {
                    type: "workspace";
                    workspace: true;
                };
            };
            id: string;
            type?: "bot";
            name?: string | null;
            avatar_url?: string | null;
            object?: "user";
        };
    } | {
        date: DateRequest;
    } | {
        page: {
            id: string;
        };
    } | {
        database: {
            id: string;
        };
    };
    type?: "mention";
    annotations?: {
        bold?: boolean;
        italic?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        code?: boolean;
        color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";
    };
} | {
    equation: {
        expression: string;
    };
    type?: "equation";
    annotations?: {
        bold?: boolean;
        italic?: boolean;
        strikethrough?: boolean;
        underline?: boolean;
        code?: boolean;
        color?: "default" | "gray" | "brown" | "orange" | "yellow" | "green" | "blue" | "purple" | "pink" | "red" | "gray_background" | "brown_background" | "orange_background" | "yellow_background" | "green_background" | "blue_background" | "purple_background" | "pink_background" | "red_background";
    };
};