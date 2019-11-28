import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation createUser($data: CreateUserInput!) {
    createUser(data: $data) {
      token
      user {
        id
        name
        email
        avatar
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation login($data: LoginUserInput!) {
    login(data: $data) {
      token
      user {
        id
        name
        email
        avatar
      }
    }
  }
`;