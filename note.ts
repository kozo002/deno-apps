addEventListener("fetch", (event) => {
  const body = `
    <a href="https://note.com/info/n/nea1b96233fbf" target="_blank">https://note.com/info/n/nea1b96233fbf</a>
  `
  const response = new Response(body, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
