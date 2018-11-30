import React from "react";
import { loadModule, MS_NAMES } from 'core';

const DesktopSummaryScreen = loadModule(MS_NAMES.DESKTOP_SUMMARY_SCREEN);

export default props => <DesktopSummaryScreen {...props} />;
