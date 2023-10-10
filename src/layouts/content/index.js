import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default Content;