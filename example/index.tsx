import React from "react";
import { createRoot } from "react-dom/client";
import { ReactGoogleReviews } from "../src";
import EXAMPLE_REVIEWS from "../src/static/examples";

const App: React.FC<{}> = () => {
    return (
        <div>
            <h1>React Google Reviews Example</h1>
            <ReactGoogleReviews
                layout="carousel"
                reviews={EXAMPLE_REVIEWS}
            />
            <ReactGoogleReviews
                layout="badge"
                badgeLabel="Your Business Reviews"
                averageRating={4.5}
                totalReviewCount={150}
                reviews={EXAMPLE_REVIEWS}
            />
        </div>
    );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
