// https://www.npmjs.com/package/react-dropdown

import React from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { IoIosArrowDown, IoIosArrowUp  } from "react-icons/io";

import Wrapper from "./style";

const dropdown = ({
    options,
    _onSelect,
    defualtOption,
    placeholder
}) => (
    <Wrapper className="kk-dropdown">
        <Dropdown
            options={options}
            onChange={_onSelect}
            value={defualtOption}
            placeholder={placeholder}
            arrowClosed={<IoIosArrowDown />}
            arrowOpen={<IoIosArrowUp />}
        />
    </Wrapper>
)

export default dropdown;