export const HEAD = `HEAD`;
export const OPTIONS = `OPTIONS`;
export const GET = `GET`;
export const POST = `POST`;
export const PUT = `PUT`;
export const DELETE = `DELETE`;

export const isRead = (method) => method === HEAD || method === OPTIONS || method === GET;
export const isWrite = (method) => !isRead(method);
