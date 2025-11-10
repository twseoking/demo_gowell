'use client'

import { useNode } from '@craftjs/core'
import React, { useState, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'

interface TextProps {
  text?: string
  fontSize?: number
  fontWeight?: string
  color?: string
  textAlign?: 'left' | 'center' | 'right'
}

export const Text = ({
  text = 'Edit this text...',
  fontSize = 16,
  fontWeight = 'normal',
  color = '#000000',
  textAlign = 'left'
}: TextProps) => {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    selected
  } = useNode((state) => ({
    selected: state.events.selected
  }))

  const [editable, setEditable] = useState(false)

  useEffect(() => {
    if (!selected) {
      setEditable(false)
    }
  }, [selected])

  return (
    <div
      ref={(ref) => ref && connect(drag(ref))}
      onClick={() => setEditable(true)}
      style={{
        fontSize: `${fontSize}px`,
        fontWeight,
        color,
        textAlign,
        cursor: 'pointer',
        padding: '5px',
        minHeight: '30px'
      }}
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) => {
          setProp((props: TextProps) => (props.text = e.target.value))
        }}
        tagName="p"
        style={{ outline: 'none', margin: 0 }}
      />
    </div>
  )
}

export const TextSettings = () => {
  const {
    actions: { setProp },
    fontSize,
    fontWeight,
    color,
    textAlign
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    color: node.data.props.color,
    textAlign: node.data.props.textAlign
  }))

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size (px)
        </label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => {
            setProp((props: TextProps) => (props.fontSize = parseInt(e.target.value)))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Weight
        </label>
        <select
          value={fontWeight}
          onChange={(e) => {
            setProp((props: TextProps) => (props.fontWeight = e.target.value))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="lighter">Lighter</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Color
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setProp((props: TextProps) => (props.color = e.target.value))
          }}
          className="w-full h-10 rounded border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Align
        </label>
        <select
          value={textAlign}
          onChange={(e) => {
            setProp((props: TextProps) => (props.textAlign = e.target.value as any))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    </div>
  )
}

Text.craft = {
  displayName: 'Text',
  props: {
    text: 'Edit this text...',
    fontSize: 16,
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'left'
  },
  related: {
    settings: TextSettings
  }
}
