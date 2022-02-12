import React from "react";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
render(<p>Hello!</p>, rootElement);

/**
 * The load event is fired when the whole page has loaded,
 * including all dependent resources such as stylesheets and images.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
