import { gql } from '@apollo/client';

const ADD_PROJECT = gql`
    mutation addProject($name: String!, $description: String!, $clientId: ID!, $status: ProjectStatus!){
        addProject(name: $name, description: $description, clientId: $clientId, status: $status){
            id
            name
            description
            status
            client{
                id
                name
                email
                phone
            }
        }
    }
`;

const DELETE_PROJECT = gql`
    mutation deleteProject($id: ID!){
        deleteProject(id: $id) {
            id
            name
            description
            status
        }
    }
`;

export { DELETE_PROJECT, ADD_PROJECT }