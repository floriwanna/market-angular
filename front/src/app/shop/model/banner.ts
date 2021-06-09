export enum BannerType {
    Image = 1,
    Text,
}

export class Banner {
    type: BannerType;
    value: string
}