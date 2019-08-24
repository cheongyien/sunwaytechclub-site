import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
    page: 4,
    drawerVisible: false,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
