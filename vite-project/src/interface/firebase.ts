export interface FirebaseConfigInterface {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface FirebaseLoginInterface {
  user: {
    getIdToken: () => Promise<string>;
    email: string | null;
  };
}
