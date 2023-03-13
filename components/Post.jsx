import styled from 'styled-components/native';

const StyledPost = styled.View`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  flex-direction: row;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  justify-content: center;
  flex: 1;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const truncateTitle = (str) => {
  if (str.length >= 45) {
    return str.substring(0, 45) + '...';
  }

  return str;
};

const Post = ({ title, image, createdAt }) => {
  return (
    <StyledPost>
      <PostImage
        source={{
          uri: image,
        }}
      />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostDate>{new Date(createdAt).toLocaleDateString()}</PostDate>
      </PostDetails>
    </StyledPost>
  );
};

export default Post;
