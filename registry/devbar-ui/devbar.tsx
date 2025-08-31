'use client'

import * as React from 'react'
import { 
  DevToolbar as DevToolbarCore,
  DevToolbarProps,
  useDevToolbarTab,
  DevToolbarSection,
  DevToolbarButton,
  DevToolbarInfo,
  DevToolbarToggle
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
  DevToolbarInfo,
  DevToolbarToggle
}

// Export types
export type { DevToolbarProps, DevToolbarTab } from '@arach/devbar'

/**
 * Example: Custom DevToolbar preset for your app
 * Users can create their own presets like this
 */
export function AppDevToolbar() {
  const [apiCalls, setApiCalls] = React.useState(0)
  const [cacheHits, setCacheHits] = React.useState(0)
  
  const tabs = [
    {
      id: 'metrics',
      label: 'Metrics',
      content: (
        <DevToolbarSection title="Performance">
          <DevToolbarInfo label="API Calls" value={apiCalls} />
          <DevToolbarInfo label="Cache Hits" value={cacheHits} />
          <DevToolbarButton 
            onClick={() => {
              setApiCalls(0)
              setCacheHits(0)
            }}
            variant="primary"
            size="xs"
          >
            Reset Metrics
          </DevToolbarButton>
        </DevToolbarSection>
      )
    },
    {
      id: 'state',
      label: 'State',
      content: () => (
        <div className="text-xs space-y-2">
          {/* Your app state inspection here */}
          <pre className="text-[10px]">
            {JSON.stringify({ /* your state */ }, null, 2)}
          </pre>
        </div>
      )
    }
  ]
  
  return (
    <DevToolbar
      tabs={tabs}
      title="MyApp"
      defaultOpen={process.env.NODE_ENV === 'development'}
    />
  )
}