import { GoogleReview } from "../types/review";

class FetchPlaceReviewsError extends Error {
    constructor(message: string, public code?: string) {
        super(message);
        this.name = "FetchPlaceReviewsError";
    }
}

interface FetchPlaceReviewsBaseResponse {
    success: boolean;
}

interface FetchPlaceReviewsSuccessResponse
    extends FetchPlaceReviewsBaseResponse {
    success: true;
    reviews: GoogleReview[];
}

interface FetchPlaceReviewsErrorResponse
    extends FetchPlaceReviewsBaseResponse {
    success: false;
    error: FetchPlaceReviewsError;
}

type FetchPlaceReviewsResponse =
    | FetchPlaceReviewsSuccessResponse
    | FetchPlaceReviewsErrorResponse;
