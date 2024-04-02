import {getStorage, getDownloadURL, ref, uploadBytes} from 'firebase/storage';


export const uploadFile = async (file : File): Promise<string> => {
    const storage = getStorage();
    const storageRef = ref(storage, `${file.name}-${Date.now()}`);

    try {
        const snapshot = await uploadBytes(storageRef, file);
        const url = await getDownloadURL(snapshot.ref);
        return url;
    } catch (error) {
        return Promise.reject(error);
    }

}