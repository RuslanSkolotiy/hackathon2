import React, { useState } from "react"
import GoogleMap from "../../components/ui/map/googleMap"
import useDebounceState from "../../hooks/useDebounce"
import { settings } from "../../services/settings"

const ExampleGoogleMap = () => {
  const [query, setQuery] = useState("Googleplex")
  const [debounceQuery, setDebounceQuery] = useDebounceState(query, 1000)

  return (
    <div className="mb-5">
      <div className="row">
        <div className="col">
          <h2>Map</h2>
        </div>
        <div className="col">
          <div className="input-group">
            <input
              type="text"
              value={query}
              className="form-control form-control-sm"
              onChange={({ target }) => {
                setQuery(target.value)
                setDebounceQuery(target.value)
              }}></input>
            <button className="btn btn-sm btn-outline-secondary" type="button" id="button-addon2">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div>{debounceQuery && <GoogleMap apiKey={settings.googleApiKey} query={debounceQuery} />}</div>
    </div>
  )
}

export default ExampleGoogleMap
