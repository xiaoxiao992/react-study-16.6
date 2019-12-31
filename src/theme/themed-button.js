import React, { Component, Fragment } from 'react';
import { ThemeContext } from './theme-context'

function ThemedButton(props) {
    return (
        <ThemeContext.Consumer>
            {
                theme => (
                    <button
                        {...props}
                        style={{background: theme.background}}
                    />
                )
            }
        </ThemeContext.Consumer>
    )
}
export default ThemedButton