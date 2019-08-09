import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ProfilePicture = () => {
    const data = useStaticQuery(graphql`
        query GetAboutMePicture{
            file( relativePath: { eq: "images/Profile_Pic_Alec_Divito.png" } ) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <Img fluid={data.file.childImageSharp.fluid}
        className="profile-pic"
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Alec Divito Profile Picture" />
}

export default ProfilePicture;