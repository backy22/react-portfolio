import { Client } from '@notionhq/client';
export declare const notion: Client;
export declare const databaseId: string;
interface Block {
    type: string;
    [key: string]: any;
}
export interface NotionBlogPost {
    id: string;
    title: string;
    slug: string;
    date: string;
    content: string;
    blocks: Block[];
}
export declare function getBlogPosts(): Promise<NotionBlogPost[]>;
export {};
