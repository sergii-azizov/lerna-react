import React from "react";
import { asyncImportComponent, PACKAGE_NAMES } from 'core';

const DesktopSummaryScreen = asyncImportComponent(PACKAGE_NAMES.desktopSummaryScreen);

export default props => <DesktopSummaryScreen {...props} />;
