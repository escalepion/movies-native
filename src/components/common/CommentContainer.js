import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

const CommentContainer = ({ comment }) => {
return (
    <Card style={{ marginBottom: 15 }}>
            <CardItem>
              <Body>
                <Text>
                {comment.comment}
              </Text>
              </Body>
            </CardItem>
    </Card> 
);
};

export default CommentContainer;
