'use client'

import { useNode } from '@craftjs/core'
import React from 'react'

interface ContainerProps {
  background?: string
  padding?: number
  children?: React.ReactNode
}

export const Container = ({
  background = '#ffffff',
  padding = 20,
  children
}: ContainerProps) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  return (
    <div
      ref={(ref) => ref && connect(drag(ref))}
      style={{
        background,
        padding: `${padding}px`,
        minHeight: '50px'
      }}
    >
      {children}
    </div>
  )
}

export const ContainerSettings = () => {
  const {
    actions: { setProp },
    background,
    padding
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding
  }))

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Color
        </label>
        <input
          type="color"
          value={background}
          onChange={(e) => {
            setProp((props: ContainerProps) => (props.background = e.target.value))
          }}
          className="w-full h-10 rounded border border-gray-300"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Padding (px)
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={padding}
          onChange={(e) => {
            setProp((props: ContainerProps) => (props.padding = parseInt(e.target.value)))
          }}
          className="w-full"
        />
        <span className="text-sm text-gray-500">{padding}px</span>
      </div>
    </div>
  )
}

Container.craft = {
  displayName: 'Container',
  props: {
    background: '#ffffff',
    padding: 20
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true
  },
  related: {
    settings: ContainerSettings
  }
}
