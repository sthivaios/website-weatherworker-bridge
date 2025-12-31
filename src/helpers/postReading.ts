export async function postReading(readingToPost: {
  sensor: string;
  value: number;
  timestamp: string;
}) {
  const response = await fetch("https://weatherworker.sthivaios.dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.WEATHERWORKER_API_TOKEN ?? "",
    },
    body: JSON.stringify(readingToPost),
  });

  if (!response.ok) {
    console.log(response);
    throw new Error("Failed to post the reading");
  } else {
    // console.log(await response.json());
  }
}
