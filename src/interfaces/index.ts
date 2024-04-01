export interface ProjectProps {
    id: number,
    name: string,
    location: string,
    client?: string,
    imageUrl: string,
    skills: Array<string>,
    timeline: string,
    description: string
}

export interface PointValue {
    title: string;
    description: string;
    imageUrl: string
};