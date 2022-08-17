import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Header from 'components/Header';
import UserDetails from 'components/UserDetails';
import Home from 'pages/Home';
import Users from './pages/Users';
import Subscribers from 'pages/Subscribers';
import SubscriberDetails from 'components/SubscriberDetails';
import AddSubscriber from 'pages/AddSubscriber';
import Campaigns from 'pages/Campaigns';
import AddCampaign from 'pages/AddCampaign';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="users" element={<Users />} />
        <Route path="subscribers/:id" element={<SubscriberDetails />} />
        <Route path="subscribers/add-subscriber" element={<AddSubscriber />} />
        <Route path="subscribers" element={<Subscribers />} />
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="campaigns/add-campaign" element={<AddCampaign />} />
      </Routes>
    </Router>
  );
}

export default App;
