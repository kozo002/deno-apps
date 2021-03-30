addEventListener("fetch", (event) => {
  const response = new Response("zochang", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
