import { graphql } from './gql';

export const getMe = graphql(/* GraphQL */ `
  query getMe($id: String) {
    getMe(id: $id) {
      id
    }
  }
`);
