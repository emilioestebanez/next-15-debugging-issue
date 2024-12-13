This is a Next.js project bootstrapped with `npx create-next-app@latest` with all of the default configurations.

I've created `.vscode/launch.json` as in the [documentation](https://nextjs.org/docs/app/building-your-application/configuring/debugging).

If you try to set up a breakpoint in `src/app/page.tsx` you'll see that it only works if you disable `--turbopack` in the `npm run dev` script.

This behavior happens since `next@15.0.3-canary.7`.

Repo created to reproduce issue on <https://github.com/vercel/next.js/issues/73214>
