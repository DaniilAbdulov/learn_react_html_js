import {Routes, Route} from 'react-router-dom';
import { Home } from '../views/Home';
import { NotificationApiExample } from '../components/NotificationAPI/NotificationApiExample';
import { ClipboardExample } from '../components/ClipboardAPI/ClipboardApiExample';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notificationapi" element={<NotificationApiExample />} />
        <Route path="/clipboardapi" element={<ClipboardExample />} />
      </Routes>
    </div>
  );
};