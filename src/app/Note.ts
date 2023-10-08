export interface Note {
    id?: number;
    title: string;
    content: string;
    isShared: boolean;
    createdOn?: string;
}