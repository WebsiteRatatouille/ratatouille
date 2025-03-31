import React from "react";
import "./ExploreRecipeMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

import ExploreRecipeMenuList from "../ExploreRecipeMenuList/ExploreRecipeMenuList";
import SmallLineSeparator from "../SmallLineSeparator/SmallLineSeparator";

function ExploreRecipeMenu({ category, setCategory }) {
    return (
        <div className="explore-recipe-menu" id="explore-recipe-menu">
            <h2>Khám phá công thức</h2>
            <ExploreRecipeMenuList
                list={menu_list}
                category={category}
                setCategory={setCategory}
            />
            <SmallLineSeparator />
        </div>
    );
}

export default ExploreRecipeMenu;
