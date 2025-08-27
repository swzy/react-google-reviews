import { createRoot } from "react-dom/client";
import { ReactGoogleReviews } from "../components";
import EXAMPLE_REVIEWS from "../static/examples";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <div>
        <h1>Component Development Environment</h1>

        <h2>Carousel:</h2>
        <ReactGoogleReviews
            layout="carousel"
            reviews={EXAMPLE_REVIEWS}
        />

        <h2>Badge:</h2>
        <ReactGoogleReviews
            layout="badge"
            averageRating={4.5}
            totalReviewCount={150}
            reviews={EXAMPLE_REVIEWS}
        />
    </div>
);
