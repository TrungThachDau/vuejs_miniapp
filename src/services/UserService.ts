import {useMutation, useQuery} from "@vue/apollo-composable";
import gql from 'graphql-tag';
import User from "../models/User.ts";

export class UserService {
    static getAllUser() {
        const { result, loading,error} = useQuery(gql`
            query {
                users {
                    id
                    username
                }
            }
        `)
        return {
            result, loading,error,
        }
    }
    static login(credential:User) {
        const { result, error } = useQuery(gql`
                    query login ($data: UserLoginInput!) {
                        login(data: $data) {
                            username
                            password
                        }
                    }
            `, { data: credential  }
        );
        return {
            result, error
        }
    }
    static addUser(user: User) {
        const {mutate: addUser} = useMutation(gql`
          mutation postUser ($data: UserCreateInput!) {
              postUser (data: $data) {
                  username
                  password
              }
          }
        `, ()=>({
            variables:{
                data: {
                    username: user.username,
                    password: user.password
                }
            }
        }));
        return {
            addUser
        }
    }

}
