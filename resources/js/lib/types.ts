export interface BlogPost {
    title: string;
    description: string;
    content: string;
    date: string;
    route: string;
    tags: Tags[];
}

export enum Tags {
    BUSINESS = 'Business',
    PROGRAMMING = 'Programming',
    PSYCHOLOGY = 'Psychology',
    TECHNOLOGY = 'Technology',
    PERSONAL = 'Personal',
}

export interface Quote {
    quote: string;
    author: string;
}
