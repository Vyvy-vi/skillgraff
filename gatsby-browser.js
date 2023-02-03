import "@fontsource/dm-sans"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-mono"
import "@fontsource/dm-mono/500.css"

import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { navigate } from "gatsby"

const onRedirectCallback = (appState) => {
  navigate(appState?.returnTo || window.location.pathname)
}

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: process.env.AUTH0_CALLBACK,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  )
}
