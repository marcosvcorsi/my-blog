import React from 'react';

import {
  PostItemWrapper,
  PostItemLink,
  PostItemTag,
  PostItemInfo,
  PostItemTitle,
  PostItemDate,
  PostItemDescription,
} from './styles';

const PostItem = () => {
  return (
    <PostItemLink to="/slug">
      <PostItemWrapper>
        <PostItemTag background="#47650b">Misc</PostItemTag>
        <PostItemInfo>
          <PostItemDate>30 de Julho de 2020 - 4 min de leitura</PostItemDate>
          <PostItemTitle>Diga não ao Teste</PostItemTitle>
          <PostItemDescription>Teste</PostItemDescription>
        </PostItemInfo>
      </PostItemWrapper>
    </PostItemLink>
  );
};

export default PostItem;
