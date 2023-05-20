import React, { useCallback, useEffect, useRef } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import "./TextEditor.css"

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["image", "blockquote", "code-block"],
    ["clean"],
]


const TextEditor = () => {
    const wrapperRef = useCallback(wrapper => {
        if (wrapper == null) return

        wrapper.innerHTML = ''
        const editor = document.createElement('section')
        wrapper.append(editor)
        new Quill(editor, { theme: "snow" , modules: {toolbar: TOOLBAR_OPTIONS}})
    }, [])


    return (
        <section id='container' ref={wrapperRef}>

        </section>
    )
}

export default TextEditor