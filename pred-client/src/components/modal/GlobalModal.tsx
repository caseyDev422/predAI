import { FC, ReactNode } from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@/components/ui/dialog";


interface GlobalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void
  title?: string;
  body?: ReactNode;
  footer?: ReactNode;
}

const GlobalModal: FC<GlobalModalProps> = ({ open, onOpenChange, title, body, footer }) => (
  <DialogRoot open={open} onOpenChange={(e) => onOpenChange(e.open)}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogCloseTrigger />
      </DialogHeader>
      <DialogBody>{body}</DialogBody>
      {footer && <DialogFooter>{footer}</DialogFooter>}
    </DialogContent>
  </DialogRoot>
)

export default GlobalModal;