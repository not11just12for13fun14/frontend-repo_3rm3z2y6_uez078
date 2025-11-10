import { useState } from 'react'
import { Upload, Loader2 } from 'lucide-react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function AdminPanel() {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  const onFileSelect = (e) => {
    const f = e.target.files?.[0]
    if (f) {
      setFile(f)
      setMessage('')
    }
  }

  const onDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const onDragLeave = () => setIsDragging(false)

  const onDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f) {
      setFile(f)
      setMessage('')
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setUploading(true)
    setMessage('')
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await fetch(`${BACKEND_URL}/api/upload`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.message || 'Upload failed')
      setMessage(`Uploaded: ${data.filename}`)
      setFile(null)
    } catch (e) {
      setMessage(e.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <section id="admin" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Admin Upload</h2>
        <p className="text-gray-600 mt-2">Drag and drop a file to upload through the backend to Cloudinary.</p>

        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`mt-6 border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
        >
          <input id="file-input" type="file" className="hidden" onChange={onFileSelect} />
          <label htmlFor="file-input" className="block cursor-pointer">
            <div className="flex flex-col items-center gap-2">
              <div className="h-12 w-12 rounded-full bg-gray-900 text-white grid place-items-center">
                <Upload size={20} />
              </div>
              <p className="text-gray-700">Drop files here, or click to select</p>
              {file && <p className="text-sm text-gray-500">Selected: {file.name}</p>}
            </div>
          </label>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            onClick={handleUpload}
            disabled={!file || uploading}
            className="px-4 py-2 rounded-md bg-gray-900 text-white disabled:opacity-50 inline-flex items-center gap-2"
          >
            {uploading ? <Loader2 className="animate-spin" size={18} /> : null}
            Upload
          </button>
          {message && <span className="text-sm text-gray-600">{message}</span>}
        </div>
      </div>
    </section>
  )
}

export default AdminPanel
