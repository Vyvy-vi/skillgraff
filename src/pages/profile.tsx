import * as React from "react"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { useAuth0, withAuthenticationRequired  } from "@auth0/auth0-react";
import { Heading, Box, Flex } from "../components/ui"

function Login() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <Layout>
      <Box paddingY={6}>
      <Flex variant="column">
        <img src={user.picture} alt="profile image" className="" />
        <Heading as="h2">{user.name}</Heading> 
        <p>Logged in as {user.email}.</p>
      </Flex>
      </Box>
    </Layout>
  )
}

export default withAuthenticationRequired(Login, {
  returnTo: "/profile"
});

export const Head = () => {
  return <SEOHead title={'skillgraff'} />
}
