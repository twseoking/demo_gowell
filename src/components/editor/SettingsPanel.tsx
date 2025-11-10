'use client'

import { useEditor } from '@craftjs/core'
import React from 'react'

export const SettingsPanel = () => {
  const { actions, selected, isEnabled } = useEditor((state, query) => {
    const currentNodeId = query.getEvent('selected').last()
    let selected

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable()
      }
    }

    return {
      selected,
      isEnabled: state.options.enabled
    }
  })

  return (
    <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Settings</h3>
      {selected ? (
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-3">
            <h4 className="font-medium text-gray-700 mb-2">{selected.name}</h4>
            {selected.settings && React.createElement(selected.settings)}
          </div>
          {selected.isDeletable && (
            <button
              onClick={() => {
                actions.delete(selected.id)
              }}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              Delete
            </button>
          )}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          <p>Select a component to edit its settings</p>
        </div>
      )}
    </div>
  )
}
