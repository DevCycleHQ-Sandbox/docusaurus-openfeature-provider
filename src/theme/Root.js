import React from "react"

import { OpenFeatureProvider, OpenFeature } from "@openfeature/react-sdk"
import { FlagdWebProvider } from "@openfeature/flagd-web-provider"

await OpenFeature.setContext({ user_id: "ssr-user" })

await OpenFeature.setProviderAndWait(
  new FlagdWebProvider({
    host: "localhost",
    port: 8013,
    tls: false,
    maxRetries: 10,
    maxDelay: 30000,
  })
)

function Root({ children }) {
  return <OpenFeatureProvider>{children}</OpenFeatureProvider>
}

export default Root
