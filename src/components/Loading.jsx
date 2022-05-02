import React, { useContext } from "react"
// CONTEXT
import { DataContext } from "../context"

export const Loading = () => {
  const { isLoading } = useContext(DataContext)
  return (
    <div>
      {isLoading ? <div>wait, loading DB...</div> : <div>DB loaded</div>}
    </div>
  )
}
