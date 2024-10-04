export interface Env {
    DB: d1db;
  }
  
  export default {
    async fetch(request, env): Promise<Response> {
      const { pathname } = new URL(request.url);
  
      if (pathname === "/api/beverages") {
        // If you did not use `DB` as your binding name, change it here
        const { results } = await env.DB.prepare(
          "SELECT * FROM Users WHERE CompanyName = ?",
        )
          .bind("None")
          .all();
        return Response.json(results);
      }
  
      return new Response(
        "Call /api/beverages to see everyone who works at Bs Beverages",
      );
    },
  } satisfies ExportedHandler<Env>;