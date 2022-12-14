import { Anchor, Button, Divider, Dropdown, DynamicIcon } from "legion-ui";
import React from "react";
import styles from "../../styles/Dropdown.module.css";

export default function DropdownExample() {
  const [isOpen, setIsOpen] = React.useState(false);
  const onDropdown = () => setIsOpen((prev) => !prev);
  const onClose = () => setIsOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Dropdown Component</div>
      <Dropdown
        onClose={onClose}
        position="center"
        isOpen={isOpen}
        trigger={
          <Button
            size="sm"
            onClick={onDropdown}
            iconRight={<DynamicIcon name="ChevronDown" />}
          >
            Filter
          </Button>
        }
      >
        <div className={styles.content}>
          <div className={styles.body}>
            <Anchor>New File</Anchor>
            <Anchor>View Detail</Anchor>
            <Anchor>Edit File</Anchor>
            <Anchor>Save to Favorite</Anchor>
          </div>
          <Divider />
          <div className={styles.footer}>
            <Anchor>Delete File</Anchor>
          </div>
        </div>
      </Dropdown>
    </div>
  );
}
