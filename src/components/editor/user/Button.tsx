'use client'

import { useNode } from '@craftjs/core'
import React from 'react'

interface ButtonProps {
  text?: string
  backgroundColor?: string
  color?: string
  fontSize?: number
  padding?: string
  borderRadius?: number
}

export const Button = ({
  text = 'Click me',
  backgroundColor = '#3b82f6',
  color = '#ffffff',
  fontSize = 16,
  padding = '10px 20px',
  borderRadius = 8
}: ButtonProps) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  return (
    <button
      ref={(ref) => ref && connect(drag(ref))}
      style={{
        backgroundColor,
        color,
        fontSize: `${fontSize}px`,
        padding,
        borderRadius: `${borderRadius}px`,
        border: 'none',
        cursor: 'pointer',
        fontWeight: '500'
      }}
    >
      {text}
    </button>
  )
}

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    text,
    backgroundColor,
    color,
    fontSize,
    borderRadius
  } = useNode((node) => ({
    text: node.data.props.text,
    backgroundColor: node.data.props.backgroundColor,
    color: node.data.props.color,
    fontSize: node.data.props.fontSize,
    borderRadius: node.data.props.borderRadius
  }))

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text
        </label>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setProp((props: ButtonProps) => (props.text = e.target.value))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Color
        </label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => {
            setProp((props: ButtonProps) => (props.backgroundColor = e.target.value))
          }}
          className="w-full h-10 rounded border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Text Color
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            setProp((props: ButtonProps) => (props.color = e.target.value))
          }}
          className="w-full h-10 rounded border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Font Size (px)
        </label>
        <input
          type="number"
          value={fontSize}
          onChange={(e) => {
            setProp((props: ButtonProps) => (props.fontSize = parseInt(e.target.value)))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Border Radius (px)
        </label>
        <input
          type="number"
          value={borderRadius}
          onChange={(e) => {
            setProp((props: ButtonProps) => (props.borderRadius = parseInt(e.target.value)))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  )
}

Button.craft = {
  displayName: 'Button',
  props: {
    text: 'Click me',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    fontSize: 16,
    padding: '10px 20px',
    borderRadius: 8
  },
  related: {
    settings: ButtonSettings
  }
}
