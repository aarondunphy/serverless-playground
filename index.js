module.exports.handler = async (event) => {
  if (event?.body === undefined) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Waaaa no body" }),
    };
  }
  const { name } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hello World! Also... Hello ${name || "idk"}`,
      },
      null,
      2
    ),
  };
};
