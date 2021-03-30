addEventListener("fetch", (event) => {
  const response = new Response("kozo002", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
