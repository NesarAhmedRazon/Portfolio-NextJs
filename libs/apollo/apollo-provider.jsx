"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink
} from "@apollo/experimental-nextjs-app-support";

function makeClient() {
  const wpUrl = "https://smdpicker.com/graphql";

  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    credentials: "include",
    uri: wpUrl,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" }
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });
  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link: httpLink
  });
}

// ------------- Old Client ----------//
// function makeClient() {
//   const envs = env_from_ssr();

//   const httpLink = new HttpLink({
//     headers: {
//       "Content-Type": "application/json",
//       "CF-Access-Client-Id": "718764166307b11ddee33f443faaf3c4.access",
//       "CF-Access-Client-Secret":
//         "83c1de65addf7b5e792a87f456cfe3956b132a4f8005156f27e3accce65c2f91"
//     },

//     credentials: "include",
//     uri: envs.WP_URL
//   });

//   return new NextSSRApolloClient({
//     cache: new NextSSRInMemoryCache(),
//     link:
//       typeof window === "undefined"
//         ? ApolloLink.from([
//             new SSRMultipartLink({
//               stripDefer: true
//             }),
//             httpLink
//           ])
//         : httpLink
//   });
// }

// export function ApolloWrapper({ children }) {
//   return (
//     <ApolloNextAppProvider makeClient={makeClient}>
//       {children}
//     </ApolloNextAppProvider>
//   );
// }
// -------------------------- old -------------------//

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
