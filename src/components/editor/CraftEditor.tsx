'use client'

import { Editor, Frame, Element } from '@craftjs/core'
import React from 'react'
import { Container, Text, Button, Heading, Image } from './user'
import { Toolbox } from './Toolbox'
import { SettingsPanel } from './SettingsPanel'
import { Toolbar } from './Toolbar'

interface CraftEditorProps {
  initialContent?: string
  onSave?: (json: string) => void
  height?: number
}

export default function CraftEditor({
  initialContent,
  onSave,
  height = 600
}: CraftEditorProps) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden">
      <Editor
        resolver={{
          Container,
          Text,
          Button,
          Heading,
          Image
        }}
      >
        <Toolbar onSave={onSave} />
        <div className="flex" style={{ height: `${height}px` }}>
          <Toolbox />
          <div className="flex-1 bg-gray-100 overflow-auto p-4">
            <Frame data={initialContent}>
              <Element
                is={Container}
                canvas
                background="#ffffff"
                padding={20}
              >
                <Text text="Start editing by dragging components from the left panel..." />
              </Element>
            </Frame>
          </div>
          <SettingsPanel />
        </div>
      </Editor>
    </div>
  )
}
