import React,{ Suspense } from "react"
import "./Lazy.css"

const Lazy_comp= React.lazy(()=>import("./child.jsx"))
const Parent =()=>{
    return(<>
    <Suspense fallback={<p className="loader"></p>}>
        <Lazy_comp/>
    </Suspense>
    </>)

}
export default Parent