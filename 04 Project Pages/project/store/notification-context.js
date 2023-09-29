import { createContext, useState } from "react";

const NotificationContext = createContext({
  notification: null,
  showNotifaction: function () {},
  hideNotification: function () {},
});

export function NotificationContextProvider({ children }) {
  return (
    <NotificationContext.Provider>{children}</NotificationContext.Provider>
  );
}

export default NotificationContext;
