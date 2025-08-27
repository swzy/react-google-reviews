export type GoogleReview = {
    reviewId: string | null;
    reviewer: {
        reviewUrl: string | null;
        profilePhotoUrl: string;
        displayName: string;
        isAnonymous: boolean;
    };
    starRating: number;
    comment: string;
    createTime: string | null;
    updateTime: string | null;
    reviewReply?: {
        comment: string;
        updateTime: string;
    } | null;
};

// Force type into value space to avoid type-only export incompatibility
export const GoogleReview = {};

export type NameDisplay =
    | "fullNames"
    | "firstAndLastInitials"
    | "firstNamesOnly";

export type LogoVariant = "icon" | "full" | "none";

export type DateDisplay = "relative" | "absolute" | "none";

export type ReviewVariant = "testimonial" | "card";

export type Theme = "light" | "dark";
