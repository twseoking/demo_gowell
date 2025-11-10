'use client'

import { useNode } from '@craftjs/core'
import React from 'react'

interface ImageProps {
  src?: string
  alt?: string
  width?: string
  height?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none'
  borderRadius?: number
}

export const Image = ({
  src = 'https://via.placeholder.com/400x300',
  alt = 'Image',
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  borderRadius = 0
}: ImageProps) => {
  const {
    connectors: { connect, drag }
  } = useNode()

  return (
    <div ref={(ref) => ref && connect(drag(ref))}>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          objectFit,
          borderRadius: `${borderRadius}px`,
          display: 'block'
        }}
      />
    </div>
  )
}

export const ImageSettings = () => {
  const {
    actions: { setProp },
    src,
    alt,
    width,
    height,
    objectFit,
    borderRadius
  } = useNode((node) => ({
    src: node.data.props.src,
    alt: node.data.props.alt,
    width: node.data.props.width,
    height: node.data.props.height,
    objectFit: node.data.props.objectFit,
    borderRadius: node.data.props.borderRadius
  }))

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Image URL
        </label>
        <input
          type="text"
          value={src}
          onChange={(e) => {
            setProp((props: ImageProps) => (props.src = e.target.value))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="https://example.com/image.jpg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Alt Text
        </label>
        <input
          type="text"
          value={alt}
          onChange={(e) => {
            setProp((props: ImageProps) => (props.alt = e.target.value))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Width
        </label>
        <input
          type="text"
          value={width}
          onChange={(e) => {
            setProp((props: ImageProps) => (props.width = e.target.value))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="100%, 400px, etc."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Height
        </label>
        <input
          type="text"
          value={height}
          onChange={(e) => {
            setProp((props: ImageProps) => (props.height = e.target.value))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          placeholder="auto, 300px, etc."
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Object Fit
        </label>
        <select
          value={objectFit}
          onChange={(e) => {
            setProp((props: ImageProps) => (props.objectFit = e.target.value as any))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        >
          <option value="contain">Contain</option>
          <option value="cover">Cover</option>
          <option value="fill">Fill</option>
          <option value="none">None</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Border Radius (px)
        </label>
        <input
          type="number"
          value={borderRadius}
          onChange={(e) => {
            setProp((props: ImageProps) => (props.borderRadius = parseInt(e.target.value)))
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  )
}

Image.craft = {
  displayName: 'Image',
  props: {
    src: 'https://via.placeholder.com/400x300',
    alt: 'Image',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: 0
  },
  related: {
    settings: ImageSettings
  }
}
