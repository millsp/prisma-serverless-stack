import {PrismaClient} from '@prisma/client';
import type {
    Context,
    APIGatewayEvent,
    APIGatewayProxyResult,
} from 'aws-lambda';

export async function hello(
    event: APIGatewayEvent,
    context: Context,
): Promise<APIGatewayProxyResult> {
    try {
        const prisma = new PrismaClient();
        const data = await prisma.user.findMany();

        return {statusCode: 200, body: JSON.stringify(data)};
    } catch (err) {
        return {statusCode: 500, body: JSON.stringify(err, Object.getOwnPropertyNames(err))};
    }
}
