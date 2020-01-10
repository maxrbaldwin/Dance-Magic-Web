import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

const getViewport = () => {
  let localViewport

  if (!window) {
    return "large"
  }

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
  const theme = {
    viewport: getViewport(),
  }
  return class extends React.Component {
    render() {
      return (
        <ThemeProvider theme={theme}>
          <WrappedComponent />
        </ThemeProvider>
      )
    }
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
