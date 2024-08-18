import { Account, Client, ID } from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.reactnative.aora",
  projectId: "66c23485003667604aab",
  databaseId: "66c236680023ddd2222c",
  userCollectionId: "66c237170026f13c1f80",
  videoCollectionId: "66c2373600111c14ae14",
  storageId: "66c239760029ed69d4f0",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

const account = new Account(client);

export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
