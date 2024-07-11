import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
  Close,
} from "@radix-ui/react-dialog";
import { Button } from "./Button";
import classes from "./Modal.module.css";

export const Modal = ({
  title,
  description,
  content,
  children,
}: {
  title: string;
  description: string;
  content: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <Root>
      <Trigger asChild>{children}</Trigger>
      <Portal>
        <Overlay className={classes.overlay} />
        <Content className={classes.content}>
          {title && <Title className={classes.title}>{title}</Title>}
          {description && (
            <Description className={classes.description}>
              {description}
            </Description>
          )}
          {content}
          <Close asChild>
            <Button className={classes.button} aria-label="Close">
              Close
            </Button>
          </Close>
        </Content>
      </Portal>
    </Root>
  );
};
