import { useState, useEffect } from "react";
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import { ViewJobSheet } from "./ViewJobSheet";
import { Link } from "react-router-dom";
import axios from "axios"
import { EditJobTable } from "./EditJobTable";
export const Dashboard = ()=>{

    const url = new URL('http://localhost:3000/client');
    const fetchData = async() => {
        const res = await axios.get(url);
        const Data = res.data
        setData(Data)
     }
    
    useEffect( ()=>{    
        fetchData();
      },[])


    const dummyData = [
        {
          clientId: 'C001',
          clientName: 'John dasxy',
          contactInfo: '1234567890',
          receivedDate: '2024-09-01',
          inventoryReceived: 'Inventory 1',
          reportedIssues: 'Issue 1',
          clientNotes: 'Note 1',
          assignedTechnician: 'Tech 1',
          estimatedAmount: '$100',
          deadline: '2024-09-10',
          status: 'In Progress',
        },
        {
          clientId: 'C002',
          clientName: 'Jane Smith',
          contactInfo: '0987654321',
          receivedDate: '2024-09-02',
          inventoryReceived: 'Inventory 2',
          reportedIssues: 'Issue 2',
          clientNotes: 'Note 2',
          assignedTechnician: 'Tech 2',
          estimatedAmount: '$200',
          deadline: '2024-09-15',
          status: 'Pending',
        },
        // Add more dummy data as needed
      ];

    const [query, setQuery] = useState('');
    const [data, setData] = useState(dummyData);
    const [selectedClient, setSelectedClient] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const handleSearch = () => {
        const data = async()=>{
            try {
                
                const response = await axios.get(`http://localhost:3000/client/search?q=${query}`);
                setData(response.data);
            
              } catch (error) {
                console.error("Error fetching clients", error);
            }
        }
        data();
}


  const handleView = (client) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const handleDeleteClick = async(client) =>{
    const id = client._id
    try {
        await axios.post(`${url}/${id}`)
        window.location.reload();
        
    } catch (error) {
        console.log(error);   
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  const handleSaveAsPDF = () => {
    const doc = new jsPDF();

    doc.text('Client Details', 14, 16);
    doc.autoTable({
      startY: 22,
      head: [['Field', 'Value']],
      body: [
        ['Client Id', selectedClient.clientId],
        ['Client Name', selectedClient.clientName],
        ['Contact Info', selectedClient.contactInfo],
        ['Received Date', selectedClient.receivedDate],
        ['Inventory Received', selectedClient.inventoryReceived],
        ['Reported Issues', selectedClient.reportedIssues],
        ['Client Notes', selectedClient.clientNotes],
        ['Assigned Technician', selectedClient.assignedTechnician],
        ['Estimated Amount', selectedClient.estimatedAmount],
        ['Deadline', selectedClient.deadline],
        ['Status', selectedClient.status],
      ],
    });

    doc.save(`${selectedClient.clientName}_Details.pdf`);
  };

  const handleEditClick = (client) => {
    setSelectedClient(client);
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = (updatedClient) => {
    // Make API call to save changes in the backend
    console.log("Updated Client Data:", updatedClient);
    setIsEditModalOpen(false); // Close the modal after saving
  };





    return (
        <div>
            <h1 className="text-center text-white bg-customBlue p-10 font-bold text-2xl">HARDIK TRADERS-CLIENT MANAGEMENT DASHBOARD</h1>
            <div className="flex items-center p-4">
                <input
                    type="text"    
                    placeholder="Search by Client Name or ID..."
                    onChange={(e)=>{
                        setQuery(e.target.value);
                        handleSearch();
                    }}                     
                    className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                onClick={handleSearch}  
                className="ml-2 bg-customBlue text-white px-4 py-2 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Search
                </button>
            </div>
            <div className="flex justify-center mt-2">
                <Link
                    to="/CreateJob"
                    className="bg-customBlue text-white px-6 py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                 >
                        New Job Sheet
                </Link>
            </div>
    
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="w-full bg-customBlue text-white text-left border-b border-gray-300">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Client Id</th>
            <th className="px-4 py-2">Client Name</th>
            <th className="px-4 py-2">Contact Info</th>
            <th className="px-4 py-2">Received Date</th>
            <th className="px-4 py-2">Inventory Received</th>
            <th className="px-4 py-2">Reported Issues</th>
            <th className="px-4 py-2">Client Notes</th>
            <th className="px-4 py-2">Assigned Technician</th>
            <th className="px-4 py-2">Estimated Amount</th>
            <th className="px-4 py-2">Deadline</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.clientId} className="border-b border-gray-300">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.clientId}</td>
              <td className="px-4 py-2">{item.clientName}</td>
              <td className="px-4 py-2">{item.contactInfo}</td>
              <td className="px-4 py-2">{item.receivedDate}</td>
              <td className="px-4 py-2">{item.inventoryReceived}</td>
              <td className="px-4 py-2">{item.reportedIssues}</td>
              <td className="px-4 py-2">{item.clientNotes}</td>
              <td className="px-4 py-2">{item.assignedTechnician}</td>
              <td className="px-4 py-2">{item.estimatedAmount}</td>
              <td className="px-4 py-2">{item.deadline}</td>
              <td className="px-4 py-2">{item.status}</td>
              <td className="px-4 py-2">
              <button
                    onClick={() => handleView(item)}
                    className="bg-customBlue text-white px-3 py-1.5 rounded-md hover:bg-[#012d62] mr-2"
                  >
                    View
                  </button>
                  <Link to='/EditJob'>
                  <button
                    onClick={()=> handleEditClick(item)}
                    className="m-1 bg-customOrange text-white px-3 py-1.5 rounded-md hover:bg-[#e57200] "
                  >
                        Edit
                  </button>
                </Link>
                <button 
                onClick={()=>handleDeleteClick(item)}
                className="bg-customRed text-white px-3 py-1.5 rounded-md m-1 ">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

           {/* Modal for Viewing Client Details */}
    {isModalOpen && selectedClient && (
        <ViewJobSheet 
        selectedClient={selectedClient}
        handleCloseModal={handleCloseModal}
        handleSaveAsPDF={handleSaveAsPDF}
        handleView={handleView}
        />)}

    {isEditModalOpen &&(
        <EditJobTable
        clientData={selectedClient}
        onSave={handleSaveChanges}
        onCancel={() => setIsEditModalOpen(false)}
        />
    )}
</div>
    )

}
