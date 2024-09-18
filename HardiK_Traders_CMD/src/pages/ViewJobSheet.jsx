

export const ViewJobSheet = ({handleCloseModal,handleSaveAsPDF,selectedClient})=>{
    return(
        <div className="fixed inset-0 bg-[#f3f4f6] bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white w-[800px] rounded-[8px] shadow-lg p-6">
            <div className="bg-[#003366] text-white text-center py-4 rounded-t-[8px]">
              <h1 className="text-[24px] font-bold">VIEW JOB SHEET</h1>
            </div>
            <div className="border border-[#e5e7eb]">
              <div className="grid grid-cols-2">
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Client Id:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.clientId}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Client Name:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.clientName}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Contact Info:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.contactInfo}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Received Date:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.receivedDate}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Inventory Received:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.inventoryReceived}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Inventory Image/Document/Video:
                </div>
                <div className="p-2 border-b border-[#e5e7eb] text-customBlue font-bold"><a href={selectedClient.inventoryUrl}>View File</a></div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Reported Issues:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.reportedIssues}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Client Notes:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.clientNotes}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Assigned Technician:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.assignedTechnician}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Estimated Amount:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.estimatedAmount}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Deadline:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.deadline}</div>
                <div className="bg-[#003366] text-white p-2 border-b border-r border-[#e5e7eb]">
                  Status:
                </div>
                <div className="p-2 border-b border-[#e5e7eb]">{selectedClient.status}</div>
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-[#333] mb-2">Add or Update Note:</label>
              <textarea className="w-full border border-[#e5e7eb] rounded-[4px] p-2 mb-4"></textarea>
              <button className="bg-[#003366] text-white py-2 px-4 rounded-[4px] w-full">
                Save Note
              </button>
            </div>
            <div className="mt-4">
              <button className="bg-[#FE8100] text-white py-2 px-4 rounded-[4px] mr-2">
                Edit
              </button>
              <button className="bg-red-600 text-white mr-2 py-2 px-4 rounded-[4px]">
                Delete
              </button>
              <button
                onClick={handleSaveAsPDF}
                className="border border-[#003366] text-[#003366] py-2 px-4 rounded-[4px]"
              >
                Save as PDF
              </button>
            </div>
            
            <div className="mt-4 text-center">
              <button
                onClick={handleCloseModal}
                className="bg-gray-600 text-white py-2 px-4 rounded-[4px] hover:bg-gray-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      
    )
}