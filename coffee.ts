addEventListener("fetch", (event) => {
  const response = new Response("coffee", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
