import React, { useState } from "react";

export function CreateJobTable() {
  // Initialize state for form fields
  const [clientName, setClientName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [receivedDate, setReceivedDate] = useState("");
  const [inventoryReceived, setInventoryReceived] = useState("");
  const [inventoryFile, setInventoryFile] = useState(null); // For file uploads
  const [reportedIssues, setReportedIssues] = useState("");
  const [clientNotes, setClientNotes] = useState("");
  const [assignedTechnician, setAssignedTechnician] = useState("");
  const [deadline, setDeadline] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleFileChange = (e) => {
    setInventoryFile("https://loremflickr.com/cache/resized/65535_52978387706_496f7f5d36_c_640_480_nofilter.jpg");
  };

  // Handle form submission
  const handleSaveJobSheet = async (e) => {
    e.preventDefault();

    // Create a FormData object for handling file uploads
    const formData = new FormData();
    formData.append("clientName", clientName);
    formData.append("contactInfo", contactInfo);
    formData.append("receivedDate", receivedDate);
    formData.append("inventoryReceived", inventoryReceived);
    formData.append("inventoryFile", inventoryFile);
    formData.append("reportedIssues", reportedIssues);
    formData.append("clientNotes", clientNotes);
    formData.append("assignedTechnician", assignedTechnician);
    formData.append("deadline", deadline);
    formData.append("status", status);

    // Send form data to the backend API (using fetch or Axios)
    try {
      const response = await fetch("http://localhost:3000/client", {
        method: "POST",
        body: formData, 
      });

      if (response.ok) {
        // Handle success (e.g., show a success message, reset form)
        alert("Job sheet saved successfully!");
        // Optionally reset the form after submission
        setClientName("");
        setContactInfo("");
        setReceivedDate("");
        setInventoryReceived("");
        setInventoryFile(null);
        setReportedIssues("");
        setClientNotes("");
        setAssignedTechnician("");
        setDeadline("");
        setStatus("Pending");
      } else {
        // Handle errors
        alert("Failed to save the job sheet.");
      }
    } catch (error) {
      console.error("Error saving job sheet:", error);
      alert("An error occurred while saving the job sheet.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f3f3f3]">
      <div className="bg-white rounded-[8px] shadow-lg w-[600px] p-6">
        <div className="bg-[#003366] text-white text-center py-4 rounded-t-[8px]">
          <h1 className="text-xl font-bold">Create Job Sheet</h1>
        </div>
        <form className="space-y-4 mt-4" onSubmit={handleSaveJobSheet}>
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
            <label className="block text-[#333] font-semibold mb-2">Contact Info:</label>
            <input
              type="tel"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Received Date:</label>
            <input
              type="date"
              value={receivedDate}
              onChange={(e) => setReceivedDate(e.target.value)}
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
            <label className="block text-[#333] font-semibold mb-2">Upload Inventory Image/Document/Video:</label>
            <input type="file" onChange={handleFileChange} className="w-full border border-[#ccc] rounded-[4px] p-2" />
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Reported Issues:</label>
            <textarea
              value={reportedIssues}
              onChange={(e) => setReportedIssues(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
            ></textarea>
          </div>
          <div>
            <label className="block text-[#333] font-semibold mb-2">Client Notes:</label>
            <textarea
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              className="w-full border border-[#ccc] rounded-[4px] p-2"
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
              Save Job Sheet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
