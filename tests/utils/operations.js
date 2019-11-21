import { gql } from 'apollo-boost';

const createUser = gql`
    mutation($data:CreateUserInput!) {
        createUser(
            data: $data
        ){
            token,
            user {
                id
                name
                email
                avatar
            }
        }
    }
`;

const getUsers = gql`
    query {
        users {
            id
            name
            email
            avatar
        }
    }
`;

const login = gql`
    mutation($data:LoginUserInput!) {
        login(
            data: $data
        ){
            token
        }
    }
`;

const getProfile = gql`
    query {
        me {
            id
            name
            email
            avatar
        }
    }
`;

export { createUser, login, getUsers, getProfile };