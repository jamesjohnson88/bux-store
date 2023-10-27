import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
    message: string
}

export const runtime = "edge";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
   return await fetch('https://beta-trivia.bongobot.io/?type=multiple&difficulty=medium&limit=1');
}