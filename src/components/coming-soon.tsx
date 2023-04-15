import * as React from "react"
import Layout from "./layout"
import { Container, Box, Heading, Text, Link, Flex } from "./ui"
import ChevronRight from "./chevron-right"
import * as styles from "./404.css"


export default function ComingSoon() {
  return (
    <Layout>
      <Box paddingY={4}>
        <Container>
          <Flex variant="column">
            <Heading variant="mega" className={styles.heading}>
              :D
            </Heading>
            <Heading as="h1">Coming Soon!</Heading>
            <Flex variant="column" gap={0}>
              <Text variant="lead" className={styles.text}>
                Sorry! This page hasn't been built yet.
              </Text>
              <Link to="/" className={styles.link}>
                <span>Back to home</span>
                <ChevronRight className={styles.linkChevron} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Layout>
  )
}
