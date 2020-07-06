import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Avatar from '../Avatar';

import {
  ProfileWrapper,
  ProfileLink,
  ProfileAuthor,
  ProfileDescription,
  ProfilePosition,
} from './styles';

const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(
    graphql`
      query MySiteMetadata {
        site {
          siteMetadata {
            title
            position
            description
          }
        }
      }
    `
  );

  return (
    <ProfileWrapper>
      <ProfileLink>
        <Avatar />

        <ProfileAuthor>
          {title}
          <ProfilePosition>{position}</ProfilePosition>
        </ProfileAuthor>

        <ProfileDescription>{description}</ProfileDescription>
      </ProfileLink>
    </ProfileWrapper>
  );
};

export default Profile;
