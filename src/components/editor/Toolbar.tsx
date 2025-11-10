'use client'

import { useEditor } from '@craftjs/core'
import React from 'react'

interface ToolbarProps {
  onSave?: (json: string) => void
}

export const Toolbar = ({ onSave }: ToolbarProps) => {
  const { actions, query, canUndo, canRedo, enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo()
  }))

  const handleSave = () => {
    const json = query.serialize()
    if (onSave) {
      onSave(json)
    }
  }

  return (
    <div className="bg-gray-800 text-white px-6 py-3 flex items-center justify-between border-b border-gray-700">
      <div className="flex items-center space-x-4">
        <h2 className="text-xl font-bold">Page Builder</h2>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => actions.history.undo()}
          disabled={!canUndo}
          className="px-3 py-1.5 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          title="Undo"
        >
          ↶ Undo
        </button>
        <button
          onClick={() => actions.history.redo()}
          disabled={!canRedo}
          className="px-3 py-1.5 bg-gray-700 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
          title="Redo"
        >
          ↷ Redo
        </button>
        <div className="w-px h-6 bg-gray-600 mx-2"></div>
        {onSave && (
          <button
            onClick={handleSave}
            className="px-4 py-1.5 bg-blue-600 rounded hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}
