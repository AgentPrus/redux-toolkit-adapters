import { Panel, Button, ButtonToolbar } from "rsuite";

const Comment = ({ comment }) => {
  return (
    <Panel header={comment.name} bordered style={{ margin: "1rem" }}>
      {comment.body}
      <ButtonToolbar style={{ marginTop: "0.5rem" }}>
        <Button color="red" appearance="primary" size="sm">
          Delete
        </Button>
        <Button color="blue" appearance="primary" size="sm">
          Edit
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

export default Comment;
