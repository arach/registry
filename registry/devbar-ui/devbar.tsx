'use client'

import * as React from 'react'
import { 
  DevToolbar as DevToolbarCore,
  DevToolbarProps,
  useDevToolbarTab,
  DevToolbarSection,
  DevToolbarButton,
  DevToolbarInfo
} from '@arach/devbar'
import { cn } from '@/lib/utils'

/**
 * DevToolbar wrapper component
 * 
 * This is your customizable layer on top of @arach/devbar
 * Modify this file to match your design system and requirements
 */
export function DevToolbar({ 
  className,
  theme = 'auto',
  position = 'bottom-right',
  ...props 
}: DevToolbarProps) {
  return (
    <DevToolbarCore
      className={cn(
        // Add your custom styles here
        // e.g., "font-mono", "custom-toolbar"
        className
      )}
      theme={theme}
      position={position}
      {...props}
    />
  )
}

// Re-export utilities for convenience
export { 
  useDevToolbarTab,
  DevToolbarSection,
  DevToolbarButton,
  DevToolbarInfo
}

// Export types
export type { DevToolbarProps, DevToolbarTab } from '@arach/devbar'

