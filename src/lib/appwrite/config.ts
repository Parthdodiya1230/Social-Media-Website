import {Client, Account, Databases , Storage, Avatars} from 'appwrite';

export const appwriteConfig = {
    //projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    projectId : '6661c5f3003c1cbf4f8b',
    // url : import.meta.env.VITE_APPWRITE_URL,
    url: 'https://cloud.appwrite.io/v1',
    databaseId: '6662f0ea0003a1a77911',
    storageId:'6662f060001bb1c6779a',
    userCollectionId:'6662f1d00007ba4a6005',
    postCollectionId:'6662f15300049084d0ff',
    savesCollectionId:'6662f20c001341eb0f4b',
}

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);