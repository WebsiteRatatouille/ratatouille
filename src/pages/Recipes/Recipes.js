import React from "react";
import "./Recipes.css";
import RecipesPageBgImage from "../../assets/img/recipes-background.webp";

function Recipes() {
    return (
        <div className="recipes">
            <div className="recipes-background">
                <img
                    src={RecipesPageBgImage}
                    alt="Recipes page background"
                />
            </div>
            <div className="recipes-body-wrapper">
                <div className="title">
                    <h1>Công thức & Ý tưởng nấu ăn</h1>
                    <p>
                        Chúng tôi hiểu những băn khoăn của bạn. Chúng
                        tôi đồng hành cùng bạn. Đây là những công thức
                        nấu ăn tuyệt vời, được thử nghiệm và tinh
                        chỉnh để giúp bạn chuẩn bị những bữa ăn ngon
                        cho gia đình.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Recipes;
