export interface RentOffer {
    name: string;
    description: string;
    publishedAt: Date;
    city: string;
    previewImage: string;
    images: string[];
    premium: boolean;
    favorite: boolean;
    rating: number;
    type: string;
    rooms: number;
    guests: number;
    price: number;
    features: string[];
    coordinates:
    {
        latitude: number;
        longitude: number;
    };
}

export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    password: string;
    type: 'обычный' | 'pro';
}

export interface RentOfferWithUser extends RentOffer {
    user: User;
}
