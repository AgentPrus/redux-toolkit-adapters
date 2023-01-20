import { Panel, Button, ButtonToolbar } from "rsuite";

const Comment = ({ comment, onDelete }) => {
  return (
    <Panel
      header={<h3>{comment.name + " " + comment.id}</h3>}
      bordered
      style={{ margin: "1rem" }}
    >
      {comment.body}
      <ButtonToolbar style={{ marginTop: "0.5rem" }}>
        <Button
          color="red"
          appearance="primary"
          size="sm"
          onClick={() => onDelete(comment.id)}
        >
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
