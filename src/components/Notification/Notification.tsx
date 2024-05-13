import React, {FC, ReactNode } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const HIDE_DURATION = 2000

export type NotificationStatusType = "success" | "info" | "warning" | "error";
interface INotificationProps {
  isOpen: boolean;
  status: NotificationStatusType;
  handleClose: () => void;
  children: ReactNode;
}

const Notification: FC<INotificationProps> = ({
  isOpen,
  status,
  children,
  handleClose,
}) => {

  return (
    <div style={{ position: 'relative', maxWidth: '600px', height: '68px',margin: '0 auto' }}>
    <Snackbar 
      open={isOpen}
      autoHideDuration={HIDE_DURATION}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      onClose={handleClose}
      sx={{
        width: '100%',
        maxWidth: '600px',
      }}
    >
      <Alert severity={status} style={{ width: '100%' }}>
        {children}
      </Alert>
    </Snackbar>
    </div>
  );
}

export default Notification
