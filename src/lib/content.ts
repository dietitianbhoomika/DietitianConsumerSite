export type ResourceSection = {
  heading: string;
  paragraphs: string[];
};

export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  sections: ResourceSection[];
  sources: { title: string; url: string }[];
};

export const resourceSummaries: Resource[] = [
  {
    slug: "balanced-meals",
    title: "A flexible way to think about balanced meals",
    summary:
      "One visual framework for thinking about variety, with no measuring or rigid meal rules.",
    category: "Everyday nutrition",
    sections: [
      {
        heading: "A framework, not a formula",
        paragraphs: [
          "The Healthy Eating Plate from the Nutrition Source at Harvard describes one way to picture a balanced meal. In that illustration, vegetables and fruits take up about half the plate, with whole grains and healthy protein making up the other half.",
          "It is an educational visual, not a prescription for every person or every meal. Appetite, access, culture, health needs and preferences all matter. Meals can look different and still be nourishing.",
        ],
      },
      {
        heading: "Make it fit your table",
        paragraphs: [
          "You might use the idea as a prompt to notice variety, or set it aside if it is not useful. The source offers examples rather than a required portion size, and individual nutrition needs can differ.",
          "If you have a health condition or a prescribed eating plan, discuss changes with your qualified care team. This article is general education, not individualized medical advice.",
        ],
      },
    ],
    sources: [
      {
        title: "Healthy Eating Plate, The Nutrition Source, Harvard T.H. Chan School of Public Health",
        url: "https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/",
      },
    ],
  },
  {
    slug: "food-labels",
    title: "Getting oriented to a food label",
    summary:
      "A plain-language introduction to serving size, nutrients and the information on a Nutrition Facts label.",
    category: "Food information",
    sections: [
      {
        heading: "Start with the serving information",
        paragraphs: [
          "On the U.S. Nutrition Facts label, serving size and servings per container help explain the basis for the numbers shown. A package may contain more than one serving, so the label can take a moment to interpret.",
          "The label also lists nutrients and a percent Daily Value. The U.S. Food and Drug Administration explains how these parts work and how Daily Values can help compare products.",
        ],
      },
      {
        heading: "Use the information that helps you",
        paragraphs: [
          "A label is one source of information, not a score for whether a food is good or bad. What is useful to look at can depend on your questions, preferences and any advice from your care team.",
          "Label formats and rules vary by country. The source below describes the U.S. label; check your local food-safety authority for information that applies where you live.",
        ],
      },
    ],
    sources: [
      {
        title: "How to Understand and Use the Nutrition Facts Label, U.S. Food and Drug Administration",
        url: "https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label",
      },
    ],
  },
];

export function getResource(slug: string) {
  return resourceSummaries.find((resource) => resource.slug === slug);
}
