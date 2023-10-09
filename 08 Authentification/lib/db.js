import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://florian:e4udYA6rA7IyUtwd@cluster0.qf3qtyt.mongodb.net/auth?retryWrites=true&w=majority"
  );
  return client;
}
