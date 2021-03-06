This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## TODO
 - Add more info to the welcome page
 - Add open graph (for public board and welcome page)
 - Figure out how to add more pedals to the database / how to manage pedals database
 - Work on Responsive styles
 - Loading animation / skeleton
   - Create skeleton component
 - - Create Skeleton pages for each protectedRoute page
 - Add Custom Pedal feature
 - Add tour guide to bard page
 - Write tests
 - Add user page
 - Fix Delete audio alert message
 - - Add more text and fix styling on delete audio modal
 - Fix Zoom slider in PublicBoard (it does not go to the end of the bar)
 - Enable user to duplicate a board
 - Refactor translation files structure
 - Refactor public board no enable translations on the page (currently not working because it is dynamic)
 - Truncate copy link on my-board
 - Add loading indicator when creating a new board from dashboard
 - Add linter / prettier
 - show knobs below pedal
 - Add width prop to Modal

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
