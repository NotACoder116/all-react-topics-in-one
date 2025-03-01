import React, { useState } from 'react'

const FolderStructure = ({ explorer }) => {
    const { id, name, items, isFolder } = explorer;
    const [expand, setExpand] = useState(false);

    if (isFolder) {
        return (
            <div>
                <div key={id} className="cursor-pointer" onClick={() => setExpand(prev => !prev)}>
                    <span>🗂️ {name}</span>
                </div>
        
                <div className='px-2' style={{ display: expand ? 'block' : 'none' }}>
                    {items.map(exp => {
                        return <FolderStructure key={exp.id} explorer={exp} />
                    })}
                </div>
            </div>
          )
    }
    else {
        return <div>📄 {name}</div>
    }
}

export default FolderStructure
