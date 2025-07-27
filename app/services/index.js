import { hygraphEndpoint } from "@/app/constants";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(hygraphEndpoint);

// ALL PRODUCTS
export const allProducts = async () => {
  const querry = gql`
    query MyQuery {
      products {
        id
        link
        productDescription {
          html
        }
        productImage {
          url
        }
        productName
        publishedAt
        slug
      }
    }
  `;
  const response = await client.request(querry);
  return response.products;
};

// ALL SERVICES
export const allServices = async () => {
  const querry = gql`
    query MyQuery {
      services {
        createdAt
        id
        serviceIcon {
          url
        }
        serviceLink
        serviceTagline
        serviceTitle
        slug
      }
    }
  `;
  const response = await client.request(querry);
  return response.services;
};

// ALL SPONSORS
export const allSponsors = async () => {
  const querry = gql`
    query MyQuery {
      sponsorsS {
        sponsorLogo {
          url
        }
        id
        sponsorWebsiteLink
      }
    }
  `;
  const response = await client.request(querry);
  return response.sponsorsS;
};

// HOW MUCH DOES IT COST
export const howMuchDoesItCost = async () => {
  const querry = gql`
    query MyQuery {
      howMuchDoesItCosts {
        createdAt
        id
        itemIcon {
          url
        }
        itemName
        priceAndDescription {
          html
        }
      }
    }
  `;
  const response = await client.request(querry);
  return response.howMuchDoesItCosts;
};

// WHAT WE TREAT
export const whatWeTreat = async () => {
  const querry = gql`
    query MyQuery {
      whatWeTreats {
        createdAt
        id
        itemDescription {
          html
        }
        itemImage {
          url
        }
        itemTitle
        slug
      }
    }
  `;
  const response = await client.request(querry);
  return response.whatWeTreats;
};

// ALL COURSES
export const allCourses = async () => {
  const querry = gql`
    query MyQuery {
      courses {
        courseCoverPhoto {
          url
        }
        courseDescription {
          html
        }
        courseLink
        courseName
        courseOverview {
          html
        }
        createdAt
        id
        slug
      }
    }
  `;
  const response = await client.request(querry);
  return response.courses;
};

// GET COURSE DETAILS
export const getCourseDetails = async (slug) => {
  const querry = gql`
    query MyQuery($slug: String = "") {
      course(where: { slug: $slug }) {
        slug
        courseCoverPhoto {
          url
        }
        courseDescription {
          html
        }
        courseLink
        courseName
        courseOverview {
          html
        }
        createdAt
        id
        trainers {
          ... on Trainer {
            id
            trainersImage {
              url
            }
            trainersName
          }
        }
      }
    }
  `;
  const variables = { slug };
  const response = await client.request(querry, variables);
  return response.course;
};
