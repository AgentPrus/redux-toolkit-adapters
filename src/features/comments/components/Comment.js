import { memo } from "react";
import { Panel, Button, ButtonToolbar } from "rsuite";

const Comment = ({ id, body, name, onDelete, onEdit }) => {
  return (
    <Panel
      header={<h3>{name + " " + id}</h3>}
      bordered
      style={{ margin: "1rem" }}
    >
      {body}
      <ButtonToolbar style={{ marginTop: "0.5rem" }}>
        <Button
          color="red"
          appearance="primary"
          size="sm"
          onClick={() => onDelete(id)}
        >
          Delete
        </Button>
        <Button
          color="blue"
          appearance="primary"
          size="sm"
          onClick={() => onEdit(id, { body: "Test text" })}
        >
          Edit
        </Button>
      </ButtonToolbar>
    </Panel>
  );
};

export default memo(Comment);
