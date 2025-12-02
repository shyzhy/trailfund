import React from "react";

export default function Profile(){
  return (
    <div>
      <div className="card">
        <h2>Your Profile</h2>
        <p className="campaign-meta">Name: Example User</p>
        <p className="campaign-meta">Donations: ₱1,250</p>
      </div>
      <div className="card">
        <h3>Your Campaigns</h3>
        <p className="campaign-meta">No active campaigns yet.</p>
      </div>
    </div>
  );
}
