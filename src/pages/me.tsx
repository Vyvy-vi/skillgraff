import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEOHead from "../components/head"
import { useAuth0, withAuthenticationRequired  } from "@auth0/auth0-react";
import { Heading, Box, Flex } from "../components/ui"

interface LoginProps {
  data: {
    aboutPage: {
      id: string
      title: string
      description: string
      image: { id: string; url: string }
    }
  }
}

function Login(props: LoginProps) {
  const { user } = useAuth0();
  return (
    <Layout>
      <Box paddingY={6}>
      <Flex variant="column">
        <Heading as="h2">Logged in as {user.email}.</Heading>
      </Flex>
      </Box>
    </Layout>
  )
}

export default withAuthenticationRequired(Login, {
  returnTo: "/"
});

export const Head = (props: LoginProps) => {
  const { aboutPage } = props.data
  return <SEOHead {...aboutPage} />
}
export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
    }
  }
`
