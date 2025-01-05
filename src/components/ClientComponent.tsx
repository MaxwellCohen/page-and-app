"use client"

import Counter from "./Counter"

export default function ClientComponent() {
    return (<>
        <div> the children of this component are client components</div>
        <Counter />
    </>
    )
}