import { BASE_URL } from "@/config";
import { ACCESS_TOKEN } from "@/config";


export async function POST(request: Request) {
  try {
    if (!BASE_URL) {
      return new Response("Base url not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    
    const response = await fetch(`${BASE_URL}/api/user/details/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.json()),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const post = await response.json();

    return new Response(JSON.stringify(post), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}
