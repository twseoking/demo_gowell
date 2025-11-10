'use client'

import { Element, useEditor } from '@craftjs/core'
import React from 'react'
import { Container, Text, Button, Heading, Image } from './user'

export const Toolbox = () => {
  const { connectors } = useEditor()

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Components</h3>
      <div className="space-y-2">
        <div
          ref={(ref) => ref && connectors.create(ref, <Element is={Container} canvas />)}
          className="bg-blue-50 border border-blue-200 rounded-lg p-3 cursor-move hover:bg-blue-100 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl">📦</span>
            <span className="font-medium text-gray-700">Container</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Drag and drop container</p>
        </div>

        <div
          ref={(ref) => ref && connectors.create(ref, <Text />)}
          className="bg-green-50 border border-green-200 rounded-lg p-3 cursor-move hover:bg-green-100 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl">📝</span>
            <span className="font-medium text-gray-700">Text</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Editable text block</p>
        </div>

        <div
          ref={(ref) => ref && connectors.create(ref, <Heading />)}
          className="bg-purple-50 border border-purple-200 rounded-lg p-3 cursor-move hover:bg-purple-100 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl">🔤</span>
            <span className="font-medium text-gray-700">Heading</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">H1 to H6 headings</p>
        </div>

        <div
          ref={(ref) => ref && connectors.create(ref, <Button />)}
          className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 cursor-move hover:bg-yellow-100 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl">🔘</span>
            <span className="font-medium text-gray-700">Button</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Clickable button</p>
        </div>

        <div
          ref={(ref) => ref && connectors.create(ref, <Image />)}
          className="bg-pink-50 border border-pink-200 rounded-lg p-3 cursor-move hover:bg-pink-100 transition-colors"
        >
          <div className="flex items-center space-x-2">
            <span className="text-xl">🖼️</span>
            <span className="font-medium text-gray-700">Image</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Image with options</p>
        </div>
      </div>
    </div>
  )
}
