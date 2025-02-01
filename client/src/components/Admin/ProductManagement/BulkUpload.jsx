import { useState } from "react"
import { Upload } from "react-feather"

const BulkUpload = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) {
      setUploadStatus("Please select a file first.")
      return
    }

    setUploading(true)
    setUploadStatus("Uploading...")

    // Simulating file upload process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here you would typically send the file to your server
    // For this example, we'll just simulate a successful upload
    setUploading(false)
    setUploadStatus("File uploaded successfully!")
    setFile(null)
  }

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Bulk Upload Products</h3>
      <div className="mb-4">
        <input
          type="file"
          onChange={handleFileChange}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-500 file:text-white
            hover:file:bg-blue-600"
        />
      </div>
      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className={`flex items-center px-4 py-2 rounded-lg ${
          !file || uploading ? "bg-gray-500 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        } text-white`}
      >
        <Upload size={18} className="mr-2" />
        {uploading ? "Uploading..." : "Upload File"}
      </button>
      {uploadStatus && (
        <p className={`mt-4 ${uploadStatus.includes("successfully") ? "text-green-400" : "text-yellow-400"}`}>
          {uploadStatus}
        </p>
      )}
    </div>
  )
}

export default BulkUpload

