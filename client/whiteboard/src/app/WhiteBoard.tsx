import React, { useEffect, useRef } from 'react';
import { Tldraw, track, useEditor } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore } from './useYjsStore'

const HOST_URL =
process.env.NODE_ENV === 'development'
		? 'ws://localhost:1234'
		: 'wss://demos.yjs.dev'



const NameEditor = track(() => {
  const editor = useEditor()

	const { color, name } = editor.user.getUserPreferences()

	return (
    <div style={{ pointerEvents: 'all', display: 'flex' }}>
			<input
				type="color"
				value={color}
				onChange={(e) => {
          editor.user.updateUserPreferences({
            color: e.currentTarget.value,
					})
				}}
        />
			<input
				value={name}
				onChange={(e) => {
					editor.user.updateUserPreferences({
            name: e.currentTarget.value,
					})
				}}
        />
		</div>
	)
})

function WhiteBoard() {
  const store = useYjsStore({
    roomId: 'example17',
    hostUrl: HOST_URL,
  })

  return (
      <div className="tldraw__editor">

          <Tldraw
          autoFocus
          store={store}
          components={{
            SharePanel: NameEditor,
          }}
          />
      </div>
  )
}
export default WhiteBoard;