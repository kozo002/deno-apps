addEventListener("fetch", (event) => {
  const body = `
    <a href="https://note.com/info/n/nea1b96233fbf" target="_blank">https://note.com/info/n/nea1b96233fbf</a>
    <br />
    <a href="http://localhost:3101">http://localhost:3101</a>
  `
  const response = new Response(body, {
    headers: { "content-type": "text/html" },
  });
  event.respondWith(response);
});
