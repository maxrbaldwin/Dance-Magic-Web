import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

const getViewport = () => {
  let localViewport

  if (window.matchMedia("(max-width: 700px)").matches) {
    localViewport = "small"
  } else if (window.matchMedia("(max-width: 900px)").matches) {
    localViewport = "medium"
  } else {
    localViewport = "large"
  }

  return localViewport
}

function withThemeProvider(WrappedComponent) {
  return () => {
    const [theme, setTheme] = useState({})
    useEffect(() => {
      setTheme({ viewport: getViewport()})
    }, [])
    return (
      <ThemeProvider theme={theme}>
        <WrappedComponent />
      </ThemeProvider>
    )
  }
}

withThemeProvider.defaultProps = {
  children: {},
  viewport: "large",
}

withThemeProvider.propTypes = {
  children: PropTypes.node,
  viewport: PropTypes.string.isRequired,
}

export default withThemeProvider
