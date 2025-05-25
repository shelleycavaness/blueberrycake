import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import Fonts from "./fonts"
import GlobalStyle from "./global-styles"
import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes";

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={getTheme("dark")}>
            <Fonts />
            <GlobalStyle />
            <div style={{ margin: `0 auto` }} >
                <main>{children}</main>
            </div>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
