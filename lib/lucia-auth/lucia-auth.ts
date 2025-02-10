import { Google } from "arctic";

export const google = new Google(
	process.env.GOOGLE_CLIENT_ID as string,
	process.env.GOOGLE_CLIENT_SECRET as string,
	process.env.GOOGLE_CALLBACK_URL as string,
);