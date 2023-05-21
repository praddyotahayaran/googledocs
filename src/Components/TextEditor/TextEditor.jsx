import React, { useCallback} from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"
import "./TextEditor.css"
import SideBar from '../SideBar/SideBar'

const TOOLBAR_OPTIONS = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ["image", "code-block"],
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
        <main className='textEditor'>
        <section id='container' ref={wrapperRef}></section>
        <SideBar />
        </main>
    )
}

export default TextEditor