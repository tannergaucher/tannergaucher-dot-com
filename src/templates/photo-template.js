import Img from "gatsby-image"
import { Layout } from "../components"
import React from "react"
import { graphql } from "gatsby"
import moment from "moment"

export default function PhotoTemplate({ data, pageContext, location }) {
  const image = data.sanityMyImage

  const formattedDateTime = moment(
    image.myImage.asset._rawMetadata.exif.DateTimeOriginal
  ).format("MMMM Do, YYYY")

  return (
    <Layout location={location}>
      <article className="center container">
        <figure className="figure">
          <Img fluid={image.myImage.asset.fluid} />
          <div className="container">
            <figcaption className="figcaption  only-mobile-padding">
              <time>
                <small className="only-fullscreen-padding">
                  {formattedDateTime}
                </small>
              </time>
            </figcaption>
          </div>
        </figure>
        <br />
      </article>
    </Layout>
  )
}

export const PHOTO_QUERY = graphql`
  query PHOTO_QUERY($slug: String!) {
    sanityMyImage(slug: { current: { eq: $slug } }) {
      ...MyImageFragment
    }
  }
`
