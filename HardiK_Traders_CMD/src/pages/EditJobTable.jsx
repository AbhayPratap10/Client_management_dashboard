import React, { useState, useEffect } from "react";

export function EditJobTable(clientData, onSave, onCancel) {
  const [clientName, setClientName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [receivedDate, setReceivedDate] = useState("");
  const [inventoryReceived, setInventoryReceived] = useState("");
  const [reportedIssues, setReportedIssues] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [assignedTechnician, setAssignedTechnician] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("");

  // Load clientData into state when it changes
  useEffect(() => {
    if (clientData) {
      setClientName(clientData.clientName || "");
      setContactInfo(clientData.contactInfo || "");
      setReceivedDate(clientData.receivedDate || "");
      setInventoryReceived(clientData.inventoryReceived || "");
      setReportedIssues(clientData.reportedIssues || "");
      setClientNotes(clientData.clientNotes || "");
      setAssignedTechnician(clientData.assignedTechnician || "");
      setDeadline(clientData.deadline || "");
      setStatus(clientData.status || "");
    }
  }, [clientData]);

  const handleSave = (e) => {
    e.preventDefault();
    const updatedClient = {
      clientName,
      contactInfo,
      receivedDate,
      inventoryReceived,
      reportedIssues,
      clientNotes,
      assignedTechnician,
      deadline,
      status,
    };
    onSave(updatedClient);
  };

  if (!clientData) {
    return <div>Loading...</div>; // Display a loading message until clientData is available
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f3f3]">
      <div className="bg-white rounded-[8px] shadow-lg w-[600px] p-6">
        <div className="bg-[#003366] text-white text-center py-4 rounded-t-[8px]">
          <h1 className="text-xl font-bold">Edit JOB SHEET</h1>
        </div>
        <form className="space-y-4 mt-4" onSubmit={handleSave}>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Client Name:</label>
            <input
              required
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Contact Info (Phone 10nos):</label>
            <input
              type="tel"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              pattern="[0-9]{10}"
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Received Date:</label>
            <input
              type="text"
              value={receivedDate}
              onChange={(e) => setReceivedDate(e.target.value)}
              placeholder="dd-mm-yyyy"
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Inventory Received:</label>
            <input
              type="text"
              value={inventoryReceived}
              onChange={(e) => setInventoryReceived(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Reported Issues:</label>
            <textarea
              value={reportedIssues}
              onChange={(e) => setReportedIssues(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2 h-[100px]"
            ></textarea>
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Client Notes:</label>
            <textarea
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2 h-[100px]"
            ></textarea>
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Assigned Technician:</label>
            <input
              type="text"
              value={assignedTechnician}
              onChange={(e) => setAssignedTechnician(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Deadline:</label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Status:</label>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            >
              <option value="Pending">Pending</option>
              <option value="In-process">In-process</option>
            </select>
          </div>
          <div>
            <button type="submit" className="bg-[#003366] text-white py-2 px-4 rounded-[4px] w-full">
              Save Changes
            </button>
          </div>
          <div>
            <button onClick={onCancel} className=" text-[#003366] font-bold py-2 px-4 rounded-[4px] w-full">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
