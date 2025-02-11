import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Notification {
  message: string;
  type: 'success' | 'error' 
}

interface NotificationState {
  notification: Notification | null;
}

const initialState: NotificationState = {
  notification: null,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<Notification>) => {
      state.notification = action.payload;
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
