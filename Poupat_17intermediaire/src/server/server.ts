import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json(); // Parse the JSON body
  const name = body.name; // Extract the "name" field

  console.log(`Received name: ${name}`); // Log the name to the server console

  return new Response(
    JSON.stringify({
      message: "C'était un POST !",
      receivedName: name, // Include the received name in the response
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
};