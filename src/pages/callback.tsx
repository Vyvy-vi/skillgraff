import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"
import { useAuth0, withAuthenticationRequired  } from "@auth0/auth0-react";
import { Link } from "../components/ui"

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

function CallBack(props: LoginProps) {
  return (
    <Layout>
      <Link to="/">Home</Link>
    </Layout>
  )
}

export default CallBack;

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