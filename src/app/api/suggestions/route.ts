import { NextRequest, NextResponse } from "next/server";

interface LlmApiResult {
  response: string;
}

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();

  console.log(prompt);

  if (!prompt) {
    return NextResponse.json(
      { error: "Prompt field is required" },
      { status: 400 },
    );
  }

  try {
    const { LLM_API_BASE_URL } = process.env;

    console.log(`[API Suggestions] Calling LLM API`);

    const apiResponse = await fetch(LLM_API_BASE_URL + "/api/generate", {
      method: "POST",
      body: JSON.stringify({
        model: "manga-sommelier",
        prompt,
        stream: false,
      }),
      next: { revalidate: 3600 },
    });

    if (!apiResponse.ok) {
      console.error(`[API Suggestions] Error LLM API: ${apiResponse.status}`);

      return NextResponse.json(
        { error: `Erreur de l'API LLM: ${apiResponse.statusText}` },
        { status: apiResponse.status },
      );
    }

    const { response }: LlmApiResult = await apiResponse.json();

    console.log(response);

    return NextResponse.json(JSON.parse(response));
  } catch (error) {
    console.error("[API Suggestion] Internal server error:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue sur le serveur." },
      { status: 500 },
    );
  }
}
