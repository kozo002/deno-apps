addEventListener("fetch", (event) => {
  const response = new Response("note", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
