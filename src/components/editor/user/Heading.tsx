'use client'

import { useNode } from '@craftjs/core'
import React, { useState, useEffect } from 'react'
import ContentEditable from 'react-contenteditable'

interface HeadingProps {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: string
  textAlign?: 'left' | 'center' | 'right'
}

export const Heading = ({
  text = 'Heading',
  level = 2,
  color = '#000000',
  textAlign = 'left'
}: HeadingProps) => {
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

  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <div
      ref={(ref) => ref && connect(drag(ref))}
      onClick={() => setEditable(true)}
      style={{ cursor: 'pointer' }}
    >
      <ContentEditable
        html={text}
        disabled={!editable}
        onChange={(e) => {
          setProp((props: HeadingProps) => (props.text = e.target.value))
        }}
        tagName={Tag}
        style={{
          color,
          textAlign,
          outline: 'none',
          margin: '10px 0'
        }}
      />
    </div>
  )
}

export const HeadingSettings = () => {
  const {
    actions: { setProp },
    text,
    level,
    color,
    textAlign
  } = useNode((node) => ({
    text: node.data.props.text,
    level: node.data.props.level,
    color: node.data.props.color,
    textAlign: node.data.props.textAlign
  }))

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Heading Level
        </label>
        <select
          value={level}
          onChange={(e) => {
            setProp((props: HeadingProps) => (props.level = parseInt(e.target.value) as any))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          {[1, 2, 3, 4, 5, 6].map((h) => (
            <option key={h} value={h}>
              H{h}
            </option>
          ))}
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
            setProp((props: HeadingProps) => (props.color = e.target.value))
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
            setProp((props: HeadingProps) => (props.textAlign = e.target.value as any))
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

Heading.craft = {
  displayName: 'Heading',
  props: {
    text: 'Heading',
    level: 2,
    color: '#000000',
    textAlign: 'left'
  },
  related: {
    settings: HeadingSettings
  }
}
