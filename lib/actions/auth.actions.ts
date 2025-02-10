"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { TBaseUser, TCreateUser, TLoginUser, TLoginWithLuciaGoogle } from "../schema/user.schema";
import { deleteAuthTokenCookie } from "../lucia-auth/lucia-sessions";
import { deleteSessionTokenCookie } from "../lucia-auth/lucia-sessions";
import { redirect } from "next/navigation";

//  make this function -- send a request to backend server to get the user data with that payload 
export async function getUserFromGoogleId(userData:TLoginWithLuciaGoogle): Promise<{
	data: TBaseUser | null;
	message: string;
}> {
	try {
		const response = await fetch(
			`${process.env.BACKEND}/user/lucia-google-auth`,
			{
				method: "POST",
        cache: 'no-store',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(userData),
			}
		);

		if (!response.ok) {
			return {data:null, message:"Invalid Response"}
		}

		const {data, message} = await response.json();
		return {data, message}

	} catch (error) {
		return {data:null, message:"Some Error occurred while processing request data"}
	}
}

export const getUserSession = async (): Promise<{
  data: TBaseUser | null;
  message: string;
}> => {
  try {
    const cookieStore = await cookies();
    const authToken = cookieStore.get("auth-token")?.value;
    if (!authToken || authToken === undefined || authToken === null) {
      return { data: null, message: "User not logged in!" };
    }

    const response = await fetch(`${process.env.BACKEND}/user/get-user-session`, {
      method: "GET",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + authToken,
      },
    });

    if (!response.ok) {
      const { data, message } = await response.json();
      return { data: null, message }
    }
    
    const { data, message } = await response.json();
    return { data, message :"user logged in!" }
    

  } catch (error) {
    return { data: null, message: "Some Error Occured while getting user session!" };
  }
};

export const logOut = async () => {
	await deleteSessionTokenCookie();
  await deleteAuthTokenCookie()
  redirect('/')
  // await signOut() //from next auth package 
  return
};

export const deAuthToken = async (token: string): Promise<TBaseUser | null> => {
  try {
    const secretkey = process.env.SECRET_KEY_FOR_AUTH as string;
    const data = await jwt.verify(token, secretkey) as TBaseUser;
    return data;
  } catch (error: any) {
    return null;
  }
};


export const handleLogIn = async (
  userData: TLoginUser
): Promise<{
  data: string | null;
  message: string;
}> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/user/login`, {
      method: "POST",
      cache: 'no-store',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const { data, message } = await response.json();
      return { data: null, message }
    }

    const { data: authToken, message: authMessage } = await response.json();
    if (!authToken) {
      return { data: null, message: authMessage };
    }

    const data = await deAuthToken(authToken);
    if (!data || !data.email || !data.role || !data.id || !data.name) {
      return { data: null, message: 'Malformed Token' }
    }

    // setting auth token for authentication in cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: "auth-token",
      value: authToken,
      httpOnly: true,
      path: "/",
    });

    return { data: authToken, message: authMessage };

  } catch (error) {
    return {
      data: null,
      message: "Some Error occurred",
    };
  }
};

export const handleSignUp = async (
  userData: TCreateUser,
): Promise<{
  data: string | null;
  message: string;
}> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND}/user/signup`,
      {
        method: "POST",
        cache: 'no-store',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if (!response.ok) {
      const { data, message } = await response.json();
      return { data: null, message }
    }

    const { data: authToken, message: authMessage } = await response.json();
    if (!authToken) {
      return { data: null, message: authMessage };
    }

    const data = await deAuthToken(authToken);
    if (!data || !data.email || !data.role || !data.id || !data.name) {
      return { data: null, message: 'Malformed Token' }
    }


    // setting auth token for authentication in cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: "auth-token",
      value: authToken,
      httpOnly: true,
      path: "/",
    });

    return { data: authToken, message: authMessage };
  } catch (error) {
    return {
      data: null,
      message: "Some Error Occured While Signin up!",
    };
  }
};


export const generateAuthToken = async (
  userData: TBaseUser,
): Promise<{
  data: string | null;
  message: string;
}> => {
    try {
    const response = await fetch(
      `${process.env.BACKEND}/user/generate-auth-token`,
      {
        method: "POST",
        cache: 'no-store',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      }
    );

    if(!response.ok){
      const { data, message } = await response.json();
      return { data: null, message }
    }

    const { data: authToken, message: authMessage } = await response.json();
    if (!authToken) {
      return { data: null, message: authMessage };
    }
    return { data: authToken, message: authMessage };

  } catch (error) {
    console.log("🚀 ~ error:", error)
    return { data: null, message: "Some Error Occured While Generating Auth Token" };
  }
};
