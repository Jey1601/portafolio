export interface PreSkill {
    src_image: string;
    name_skill: string;
}

export interface Skill {
    name:string;
    percentage: number; 
    src_icon?: string;
}

export interface Skills {
    [key: string]: {
        [key: string]: Skill[];
    };
}

export interface SocialNetwork {
    src_image: string;
    name_network: string;
    url: string;
}

