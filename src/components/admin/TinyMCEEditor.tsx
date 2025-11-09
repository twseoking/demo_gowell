'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

// Dynamically import TinyMCE to avoid SSR issues
const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => (
      <div className="w-full border border-gray-300 rounded-lg p-4 bg-gray-50">
        <p className="text-gray-500">Loading editor...</p>
      </div>
    )
  }
)

interface TinyMCEEditorProps {
  value: string
  onEditorChange: (content: string) => void
  height?: number
  placeholder?: string
}

export default function TinyMCEEditor({
  value,
  onEditorChange,
  height = 400,
  placeholder = 'Start writing...'
}: TinyMCEEditorProps) {
  const [editorReady, setEditorReady] = useState(false)

  // Use environment variable for API key, fallback to "no-api-key" for self-hosted mode
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'

  return (
    <Editor
      apiKey={apiKey}
      value={value}
      onEditorChange={onEditorChange}
      onInit={() => setEditorReady(true)}
      init={{
        height,
        menubar: true,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | link image | code | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; padding: 10px; }',
        placeholder,
        branding: false,
        promotion: false,
        // Use cloud-hosted TinyMCE
        base_url: '/tinymce',
        suffix: '.min',
      }}
    />
  )
}
