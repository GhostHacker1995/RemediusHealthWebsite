import { hygraphEndpoint } from "@/app/constants";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(hygraphEndpoint);

// POPULAR DESTINATIONS
export const allServices = async () => {
  const querry = gql`
    query MyQuery {
      services {
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
