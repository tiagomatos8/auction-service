async function hello(event, context) {
  console.log(JSON.stringify(event));
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello' }),
  };
}

export const handler = hello;


