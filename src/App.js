import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackFrom from './components/FeedbackFrom';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackFrom handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
