import React from 'react';
import { Comment, List } from 'antd';
import { IComment } from '../../../Api/Types/Movie';

export interface ICommentsList {
  comments: IComment[];
}

const CommentsList: React.FC<ICommentsList> = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={comment => <Comment content={comment.text} />}
  />
);

export { CommentsList };
