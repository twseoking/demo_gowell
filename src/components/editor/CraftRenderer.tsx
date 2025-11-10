'use client'

import { Editor, Frame } from '@craftjs/core'
import React from 'react'
import { Container, Text, Button, Heading, Image } from './user'

interface CraftRendererProps {
  content: string
}

export default function CraftRenderer({ content }: CraftRendererProps) {
  // If content is empty or not valid JSON, show default content
  let jsonContent = content
  if (!content || content.trim() === '') {
    jsonContent = undefined as any
  }

  return (
    <div className="craft-renderer">
      <Editor
        resolver={{
          Container,
          Text,
          Button,
          Heading,
          Image
        }}
        enabled={false} // Disable editing in renderer
      >
        <Frame data={jsonContent}>
          <Element
            is={Container}
            canvas
            background="#ffffff"
            padding={20}
          >
            {!jsonContent && <Text text="No content available" />}
          </Element>
        </Frame>
      </Editor>
    </div>
  )
}

// Simple wrapper for Element
function Element(props: any) {
  const { is: Component, ...rest } = props
  return <Component {...rest} />
}
