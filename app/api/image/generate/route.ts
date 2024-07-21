import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    const { prompt } = await request.json();

    try {
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "dall-e-3",
                    prompt,
                    
                }),
            }
        );

        const image = await response.json();
        const imageUrl = image.data[0].url;

        return NextResponse.json({ imageUrl });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}